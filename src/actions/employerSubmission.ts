"use server";
import { connectToDB } from "@/lib/db";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { EmployerSubmissionModel } from "@/models/employerSubmissionModel";

export const employerSubmit = async (formData: FormData) => {
  const data = {
    companyName: formData.get("companyName"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    emailAddress: formData.get("emailAddress"),
    phoneNumber: formData.get("phoneNumber"),
    country: formData.get("country"),
    aircrafts: Array.from(formData.getAll("aircrafts") || []),
    aircraftRegNumber: formData.get("aircraftRegNumber"),
    additionalInfo: formData.get("additionalInfo"),
    crewTypes: Array.from(formData.getAll("crewTypes") || []),
    positionsNeeded: Array.from(formData.getAll("positionsNeeded") || []),
    operationType: Array.from(formData.getAll("operationType") || []),
  };
  try {
    connectToDB();
    const {
      companyName,
      aircraftRegNumber,
      additionalInfo,
      positionsNeeded,
      operationType,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      country,
      aircrafts,
      crewTypes,
    } = data;

    const newSubmission = await new EmployerSubmissionModel({
      companyName,
      aircraftRegNumber,
      additionalInfo,
      positionsNeeded,
      operationType,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      country,
      aircrafts,
      crewTypes,
    });

    await newSubmission.save();

    const employerMailOptions = {
      ...mailOptions,
      subject: "Employer Submission",
      html: `<h1>Employer Submission</h1><p>Name: ${firstName} ${lastName}<p>Email address: ${emailAddress}</p><p>Phone number: ${phoneNumber}</p></p>`,
    };

    transporter.sendMail(employerMailOptions, function (err, info) {
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
