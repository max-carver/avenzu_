"use server";

import { connectToDB } from "@/lib/db";
import { FlightAttendantSubmissionModel } from "@/models/flightAttendantSubmissionModel";
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
            maxEdits: 1,
          },
        },
      },
    },
  ]);

  const plainSearchResults = searchResults.map((result) => {
    const { ...PilotSubmissionModel } = result;
    return {
      ...PilotSubmissionModel,
    };
  });
  return JSON.stringify(plainSearchResults);
};

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
            maxEdits: 1,
          },
        },
      },
    },
  ]);

  const plainSearchResults = searchResults.map((result) => {
    const { ...FlightAttendantSubmissionModel } = result;
    return {
      ...FlightAttendantSubmissionModel,
    };
  });
  return JSON.stringify(plainSearchResults);
};

export { getPilotsSearch, getFlightAttendantsSearch };
