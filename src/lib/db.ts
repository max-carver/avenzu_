import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log("Successfully connected");
    } else {
      console.log("Using existing connection");
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error connecting to MongoDB");
  }
};
