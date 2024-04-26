"use server";
import { connectToDB } from "@/lib/db";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { FlightAttendantSubmissionModel } from "@/models/flightAttendantSubmissionModel";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

export const flightAttendantSubmit = async (formData: FormData) => {
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
    vipExperience: formData.get("vipExperience"),
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
      vipExperience,
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

    const newSubmission = await new FlightAttendantSubmissionModel({
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
      vipExperience,
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    });

    await newSubmission.save();

    const flightAttendantMailOptions = {
      ...mailOptions,
      subject: "New flight attendant Submission",
      html: `<h1>Flight attendant Submission</h1><p>Name: ${firstName} ${lastName}<p>Email address: ${emailAddress}</p><p>Phone number: ${phoneNumber}</p><p>Experience: ${vipExperience} hours</p></p><p>CV Url: ${cvUrl}</p><p>Photo URL: ${photoUrl}</p>`,
    };

    transporter.sendMail(flightAttendantMailOptions, function (err, info) {
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
