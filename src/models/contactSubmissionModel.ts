import mongoose from "mongoose";

const contactSubmissionSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true,
  },
});

export const ContactSubmissionModel =
  mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema);
