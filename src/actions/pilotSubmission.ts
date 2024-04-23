"use server";
import { connectToDB } from "@/lib/db";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";
import nodemailer from "nodemailer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "maxevans3108@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
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
      jobTypes,
      visas,
      photoUpload,
      cvUpload,
    } = data;

    const photoArrayBuffer = await photoUpload.arrayBuffer();
    const photoBuffer = new Uint8Array(photoArrayBuffer);
    const cvArrayBuffer = await cvUpload.arrayBuffer();
    const cvBuffer = new Uint8Array(cvArrayBuffer);

    let photoUrl;
    let cvUrl;

    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, result) => {
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
        .upload_stream({}, (error, result) => {
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
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    });
    await newSubmission.save();
    const mailOptions = {
      from: "maxevans3108@gmail.com",
      to: "maxevans3108@gmail.com",
      subject: "New pilot Submission",
      html: `<h1>Pilot Submission</h1><p>Name: ${firstName} ${lastName}<p>Email address: ${emailAddress}</p><p>Phone number: ${phoneNumber}</p><p>Experience: ${totalTime} hours</p></p><p>CV Url: ${cvUrl}</p><p>Photo URL: ${photoUrl}</p>`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
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
