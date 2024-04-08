import * as z from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_FILE_TYPES = ["file/pdf"];

export const ContactSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  emailAddress: z.string().email({ message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  photoUpload: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "File is required."),
  // .refine((file) => file?.length == 1, "File is required.")
  // .refine((file) => file[0]?.size <= 3000000, `Max file size is 3MB.`),
});

export const PilotSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  emailAddress: z.string().email({ message: "Required" }),
  phoneNumber: z.string().min(1, { message: "Required" }),
  age: z.string().min(1, { message: "Required" }),
  gender: z.string().min(1, { message: "Required" }),
  nationality: z.string().min(1, { message: "Required" }),
  country: z.string().min(1, { message: "Required" }),
  licenses: z
    .array(z.string())
    .refine((value) => value.some((license) => license), {
      message: "You have to select at least one license.",
    }),
  aircrafts: z
    .array(z.string())
    .refine((value) => value.some((aircraft) => aircraft), {
      message: "You have to select at least one aircraft.",
    }),
  totalTime: z.string().min(1, { message: "Required" }),
  jobTypes: z
    .array(z.string())
    .refine((value) => value.some((jobType) => jobType), {
      message: "You have to select at least one job type.",
    }),
  visas: z.string().min(1, { message: "Required" }),
  // cvUpload: z
  //   .instanceof(File)
  //   .refine((file) => {
  //     return !file || file.size <= MAX_UPLOAD_SIZE;
  //   }, "File size must be less than 3MB")
  //   .refine((file) => {
  //     return ACCEPTED_FILE_TYPES.includes(file.type);
  //   }, "File must be a PNG, JPG or PDF"),
  // photoUpload: z
  //   .instanceof(File)
  //   .refine((file) => {
  //     return !file || file.size <= MAX_UPLOAD_SIZE;
  //   }, "File size must be less than 3MB")
  //   .refine((file) => {
  //     return ACCEPTED_FILE_TYPES.includes(file.type);
  //   }, "File must be a PNG, JPG or PDF"),
});
