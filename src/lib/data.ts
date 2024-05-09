export const licensesData = [
  {
    id: "icao",
    label: "ICAO",
  },
  {
    id: "faa",
    label: "FAA",
  },
  {
    id: "easa",
    label: "EASA",
  },
  {
    id: "ukcaa",
    label: "UKCAA",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

export const aircraftsData = [
  {
    id: "censa",
    label: "Censna",
  },
  {
    id: "beechcraft",
    label: "Beechcraft",
  },
  {
    id: "atr",
    label: "ATR",
  },
  {
    id: "embrear",
    label: "Embrear",
  },
  {
    id: "legacy",
    label: "Legacy",
  },
  {
    id: "bombardier",
    label: "Bombardier",
  },
  {
    id: "bombardierChallenger",
    label: "Bombardier Challenger",
  },
  {
    id: "gulfstream",
    label: "Gulfstream",
  },
  {
    id: "dassault",
    label: "Dassault",
  },
  {
    id: "dassaultFelcom",
    label: "Dassault Felcon",
  },
] as const;

export const jobTypeData = [
  {
    id: "freelance",
    label: "Freelance",
  },
  {
    id: "permanent",
    label: "Permanent",
  },
] as const;

export type PilotSubmission = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNmber: string;
  age: number;
  gender: string;
  nationality: string;
  country: string;
  licenses: [];
  totalTime: number;
  pic: number;
  secondInCommand: number;
  singleEngineLand: number;
  multiEngineLand: number;
  jetTime: number;
  turbineTime: number;
  helicopterTime: number;
  instructorTime: number;
  jobTypes: [];
  visas: [];
  photoUrl: string;
  cvUrl: string;
};
