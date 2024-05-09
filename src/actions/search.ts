"use server";

import { connectToDB } from "@/lib/db";
import { PilotSubmissionModel } from "@/models/pilotSubmissionModel";

const getSearch = async (searchTerm: string) => {
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

export default getSearch;
