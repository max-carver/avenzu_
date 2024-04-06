import mongoose from "mongoose";

const pilotsubmissionSchema = new mongoose.Schema({
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
  jobTypes: {
    type: Array,
    required: true,
  },
  visas: {
    type: Array,
    required: true,
  },
});

export const PilotSubmissionModel =
  mongoose.models.PilotSubmission ||
  mongoose.model("PilotSubmission", pilotsubmissionSchema);
