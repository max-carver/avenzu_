"use server";
import { connectToDB } from "@/lib/db";
import { ContactSubmissionModel } from "@/models/contactSubmissionModel";
import { ContactSchema } from "@/schemas";
import * as z from "zod";
// // import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_APIKEY,
//   api_secret: process.env.CLOUDINARY_APISECRET,
// });

// export const uploadImageToCloudinary = async (imageFile: any) => {
//   try {
//     const uploadResponse = await cloudinary.uploader.upload(imageFile.path, {
//       // folder: "", // Optional folder for organization
//       use_filename: true, // Keep the original filename
//       resource_type: "auto", // Detect image or video automatically
//     });

//     // return uploadResponse.secure_url; // Return the uploaded image URL
//     console.log(uploadResponse);
//   } catch (error: any) {
//     console.error("Error uploading image to Cloudinary:", error);
//     if (error.http_code === 400) {
//       throw new Error("Invalid image format or file size");
//     } else if (error.http_code === 403) {
//       throw new Error("Insufficient permissions for upload");
//     } else {
//       throw new Error("Image upload failed");
//     }
//   }
// };
export const contactSubmit = async (values: z.infer<typeof ContactSchema>) => {
  // connectToDB();
  const validatedFields = ContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  // const { firstName, lastName, emailAddress, message, photoUpload } =
  // validatedFields.data;
  // if (!firstName || !lastName || !emailAddress || !message) {
  //   return { error: "Required fields are missing" };
  // }
  // if (!photoUpload) {
  //   return { error: "Please upload a photo" }; // Add validation for photo upload
  // }
  // // const imageUrl = await uploadImageToCloudinary(photoUpload);
  // // const newSubmission = new ContactSubmissionModel({
  // //   ...validatedFields.data,
  // //   // photoUpload: imageUrl,
  // // });
  // // await newSubmission.save();
  console.log({ ...validatedFields });
  // return {
  //   success: "Thank you for your submission! We'll be in touch shortly",
  // };
};
