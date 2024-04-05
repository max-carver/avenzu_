"use server";
import { connectToDB } from "@/lib/db";
import { ContactSubmissionModel } from "@/models/contactSubmissionModel";
import { ContactSchema } from "@/schemas";
import * as z from "zod";

export const contactSubmit = async (values: z.infer<typeof ContactSchema>) => {
  connectToDB();

  const validatedFields = ContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { firstName, lastName, emailAddress, message } = validatedFields.data;

  if (!firstName || !lastName || !emailAddress || !message) {
    return { error: "Required fields are missing" };
  }
  const newSubmission = new ContactSubmissionModel(validatedFields.data);
  await newSubmission.save();
  console.log(validatedFields);
  return {
    success: "Thank you for your submission! We'll be in touch shortly",
  };
};
