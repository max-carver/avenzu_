"use server";

import { connectToDB } from "@/lib/db";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";

const getPilotsSearch = async (searchTerm: string) => {
  connectToDB();
  const searchResults = await PilotSubmissionModel.aggregate([
    {
      $search: {
        index: "searchPilots",
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
      totalTime,
      pic,
      secondInCommand,
      singleEngineLand,
      multiEngineLand,
      jetTime,
      turbineTime,
      helicopterTime,
      instructorTime,
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
      totalTime,
      pic,
      secondInCommand,
      singleEngineLand,
      multiEngineLand,
      jetTime,
      turbineTime,
      helicopterTime,
      instructorTime,
      jobTypes,
      visas,
      photoUrl,
      cvUrl,
    };
  });
  return JSON.stringify(plainSearchResults);
};

export default getPilotsSearch;
