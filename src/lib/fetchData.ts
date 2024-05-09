import { FlightAttendantSubmissionModel } from "@/models/flightAttendantSubmissionModel";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";
import { connectToDB } from "./db";

export const getPilots = async () => {
  try {
    connectToDB();
    const pilots = await PilotSubmissionModel.find({});
    return pilots;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
};

// export const getFlightAttendants = async () => {
//   try {
//     connectToDB();
//     const flightAttendants = await FlightAttendantSubmissionModel.find();
//     return flightAttendants;
//   } catch (err: any) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };
