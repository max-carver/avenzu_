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
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      contactSubmit(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
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
                      disabled={isPending}
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
