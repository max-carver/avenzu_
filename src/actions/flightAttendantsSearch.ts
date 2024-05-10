"use server";

import { connectToDB } from "@/lib/db";
import { FlightAttendantSubmissionModel } from "@/models/flightAttendantSubmissionModel";

const getFlightAttendantsSearch = async (searchTerm: string) => {
  connectToDB();
  const searchResults = await FlightAttendantSubmissionModel.aggregate([
    {
      $search: {
        index: "flightAttendantsSearch",
        text: {
          query: searchTerm,
          path: {
            wildcard: "*",
          },
          fuzzy: {
            maxEdits: 2,
          },
        },
      },
    },
  ]);

  const plainSearchResults = searchResults.map((result) => {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNmber,
      age,
      gender,
      nationality,
      country,
      licenses,
      aircrafts,
      vipExperience,
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    } = result;

    return {
      firstName,
      lastName,
      emailAddress,
      phoneNmber,
      age,
      gender,
      nationality,
      country,
      licenses,
      aircrafts,
      vipExperience,
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    };
  });
  return JSON.stringify(plainSearchResults);
};

export default getFlightAttendantsSearch;
