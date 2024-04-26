import mongoose from "mongoose";

const FlightAttendantSchema = new mongoose.Schema(
  {
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
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    licenses: {
      type: Array,
      required: true,
    },
    aircrafts: {
      type: Array,
      required: true,
    },
    vipExperience: {
      type: Number,
      required: true,
    },
    jobTypes: {
      type: Array,
      required: true,
    },
    visas: {
      type: Array,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    cvUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FlightAttendantSubmissionModel =
  mongoose.models.FlightAttendantSubmission ||
  mongoose.model("FlightAttendantSubmission", FlightAttendantSchema);
