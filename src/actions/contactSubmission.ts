"use server";
import { ContactSchema } from "@/schemas";
import * as z from "zod";

export const contactSubmit = async (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Success" };
};
