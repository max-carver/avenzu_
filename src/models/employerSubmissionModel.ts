import mongoose from "mongoose";

const EmployerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    aircrafts: {
      type: Array,
      required: true,
    },
    aircraftRegNumber: {
      type: String,
      required: true,
    },
    crewTypes: {
      type: Array,
      required: true,
    },
    positionsNeeded: {
      type: Array,
      required: true,
    },
    operationType: {
      type: Array,
      required: true,
    },
    additionalInfo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EmployerSubmissionModel =
  mongoose.models.EmployerSubmission ||
  mongoose.model("EmployerSubmission", EmployerSchema);
