import mongoose from "mongoose";

const connection: any = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("Successfully connected");
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to MongoDB");
  }
};
