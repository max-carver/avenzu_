"use server";
import { connectToDB } from "@/lib/db";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";
import { PilotSchema } from "@/schemas";
import * as z from "zod";

export const pilotSubmit = async (values: z.infer<typeof PilotSchema>) => {
  connectToDB();
  const validatedFields = PilotSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

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
  } = validatedFields.data;

  if (
    !firstName ||
    !lastName ||
    !emailAddress ||
    !phoneNumber ||
    !age ||
    !gender ||
    !nationality ||
    !country ||
    !licenses ||
    !aircrafts ||
    !totalTime ||
    !jobTypes ||
    !visas
  ) {
    return { error: "Required fields are missing" };
  }
  const newSubmission = new PilotSubmissionModel(validatedFields.data);
  await newSubmission.save();
  console.log(validatedFields);
  return {
    success: "Thank you for your submission! We'll be in touch shortly  ",
  };
};
