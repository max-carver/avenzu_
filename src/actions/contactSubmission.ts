"use server";
import { connectToDB } from "@/lib/db";
import { ContactSubmissionModel } from "@/models/contactSubmissionModel";

export const contactSubmit = async (formData: FormData) => {
  try {
    connectToDB();
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
      message: formData.get("message"),
    };
    const { firstName, lastName, emailAddress, message } = data;
    const newSubmission = await new ContactSubmissionModel({
      firstName,
      lastName,
      emailAddress,
      message,
    });
    await newSubmission.save();
    console.log(data);
    return {
      success: "Thank you for your submission! We'll be in touch shortly",
    };
  } catch (err: any) {
    console.log(err.message);
    return { error: "Something went wrong" };
  }
};
