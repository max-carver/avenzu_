"use server";
import { connectToDB } from "@/lib/db";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

export const pilotSubmit = async (formData: FormData) => {
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    emailAddress: formData.get("emailAddress"),
    phoneNumber: formData.get("phoneNumber"),
    age: formData.get("age"),
    gender: formData.get("gender"),
    nationality: formData.get("nationality"),
    country: formData.get("country"),
    licenses: Array.from(formData.getAll("licenses") || []),
    aircrafts: Array.from(formData.getAll("aircrafts") || []),
    totalTime: formData.get("totalTime"),
    pic: formData.get("pic"),
    secondInCommand: formData.get("secondInCommand"),
    singleEngineLand: formData.get("singleEngineLand"),
    multiEngineLand: formData.get("multiEngineLand"),
    jetTime: formData.get("jetTime"),
    turbineTime: formData.get("turbineTime"),
    helicopterTime: formData.get("helicopterTime"),
    instructorTime: formData.get("instructorTime"),
    jobTypes: Array.from(formData.getAll("aircrafts") || []),
    visas: formData.get("visas"),
    photoUpload: formData.get("photoUpload") as File,
    cvUpload: formData.get("cvUpload") as File,
  };
  try {
    connectToDB();
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      age,
      gender,
      nationality,
      country,
      licenses,
      aircrafts,
      totalTime,
      pic,
      secondInCommand,
      singleEngineLand,
      multiEngineLand,
      jetTime,
      turbineTime,
      helicopterTime,
      instructorTime,
      jobTypes,
      visas,
      photoUpload,
      cvUpload,
    } = data;

    if (photoUpload.size > 10485760) {
      return { error: "Image too large" };
    } else if (!photoUpload.type.includes("image")) {
      return {
        error: "Invalid image format. Only .jpg, .png, and .webp accepted",
      };
    }

    const photoArrayBuffer = await photoUpload.arrayBuffer();
    const photoBuffer = new Uint8Array(photoArrayBuffer);
    const cvArrayBuffer = await cvUpload.arrayBuffer();
    const cvBuffer = new Uint8Array(cvArrayBuffer);

    let photoUrl;
    let cvUrl;

    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error: unknown, result) => {
          if (error) {
            reject(error);
            return;
          }
          photoUrl = result?.secure_url;
          resolve(result);
        })
        .end(photoBuffer);
    });

    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error: unknown, result) => {
          if (error) {
            reject(error);
            return;
          }
          cvUrl = result?.secure_url;
          resolve(result);
        })
        .end(cvBuffer);
    });

    const newSubmission = await new PilotSubmissionModel({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      age,
      gender,
      nationality,
      country,
      licenses,
      aircrafts,
      totalTime,
      pic,
      secondInCommand,
      singleEngineLand,
      multiEngineLand,
      jetTime,
      turbineTime,
      helicopterTime,
      instructorTime,
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    });

    await newSubmission.save();

    const pilotMailOptions = {
      ...mailOptions,
      subject: "New pilot Submission",
      html: `<h1>Pilot Submission</h1><p>Name: ${firstName} ${lastName}<p>Email address: ${emailAddress}</p><p>Phone number: ${phoneNumber}</p><p>Experience: ${totalTime} hours</p></p><p>CV Url: ${cvUrl}</p><p>Photo URL: ${photoUrl}</p>`,
    };

    transporter.sendMail(pilotMailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return { error: err };
      } else {
        console.log(info);
      }
    });
    console.log(data);
    return {
      success: "Thank you for your submission! We'll be in touch shortly",
    };
  } catch (err: any) {
    console.log(err.message);
    return { error: "Something went wrong" };
  }
};
