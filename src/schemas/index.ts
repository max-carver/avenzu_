import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg"];

export const ContactSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  emailAddress: z.string().email({ message: "Email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const PilotSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  emailAddress: z.string().email({ message: "Required" }),
  phoneNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  age: z.number().min(1, { message: "Required" }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
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
  totalTime: z.number().min(1, { message: "Required" }),
  pic: z.number().min(1, { message: "Required" }),
  timeInSecond: z.number().min(1, { message: "Required" }),
  singleEngineLand: z.number().min(1, { message: "Required" }),
  multiEngineLand: z.number().min(1, { message: "Required" }),
  jetTime: z.number().min(1, { message: "Required" }),
  turbineTime: z.number().min(1, { message: "Required" }),
  helicopterTime: z.number().min(1, { message: "Required" }),
  instructorTime: z.number().min(1, { message: "Required" }),
  jobTypes: z
    .array(z.string())
    .refine((value) => value.some((jobType) => jobType), {
      message: "You have to select at least one job type.",
    }),
  visas: z.string().min(1, { message: "Required" }),
  cvUpload: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File must be a PNG or JPG"),
  photoUpload: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File must be a PNG or JPG"),
});
