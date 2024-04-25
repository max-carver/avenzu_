import mongoose from "mongoose";

const pilotsubmissionSchema = new mongoose.Schema(
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
    totalTime: {
      type: Number,
      required: true,
    },
    pic: {
      type: Number,
      required: true,
    },
    secondInCommand: {
      type: Number,
      required: true,
    },
    singleEngineLand: {
      type: Number,
      required: true,
    },
    multiEngineLand: {
      type: Number,
      required: true,
    },
    jetTime: {
      type: Number,
      required: true,
    },
    turbineTime: {
      type: Number,
      required: true,
    },
    helicopterTime: {
      type: Number,
      required: true,
    },
    instructorTime: {
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

export const PilotSubmissionModel =
  mongoose.models.PilotSubmission ||
  mongoose.model("PilotSubmission", pilotsubmissionSchema);
