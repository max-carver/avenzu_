"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { ContactSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { contactSubmit } from "@/actions/contactSubmission";
import { useState, useTransition } from "react";
import clsx from "clsx";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      message: "",
      photoUpload: undefined,
    },
  });
  const photoRef = form.register("photoUpload");
  const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    emailAddress: z.string().email({ message: "Email is required" }),
    message: z.string().min(1, { message: "Message is required" }),
    photoUpload: z.instanceof(File).optional(),
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); // This works
    contactSubmit(values); // This doesnt
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-5 rounded-lg shadow-lg border border-zinc-300 w-full md:w-3/4 lg:w-5/12 space-y-5"
      >
        <h3
          className={clsx("text-center font-medium text-2xl mb-5", {
            hidden: success,
          })}
        >
          Contact
        </h3>
        {!success && (
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      autoComplete="on"
                      autoCapitalize="on"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      autoComplete="on"
                      autoCapitalize="on"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@gmail.com"
                      autoComplete="on"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Message..."
                      autoCapitalize="on"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photoUpload"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photo upload</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...photoRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <FormError message={error} />
        <FormSuccess message={success} />

        {isPending ? (
          <button
            type="submit"
            className="mt-5 w-full text-center bg-red-500 hover:bg-red-500/60 transition duration-200 py-2 rounded-lg text-zinc-50"
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className={clsx(
              "mt-5 w-full text-center bg-red-500 hover:bg-red-500/60 transition duration-200 py-2 rounded-lg text-zinc-50",
              {
                hidden: success,
              }
            )}
          >
            Submit
          </button>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
