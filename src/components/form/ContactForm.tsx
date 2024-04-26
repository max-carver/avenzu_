"use client";

import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { contactSubmit } from "@/actions/contactSubmission";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Input, TextArea } from "@/components/form/Input";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  return (
    <form
      ref={ref}
      action={async (formData) => {
        setError("");
        setSuccess("");
        ref.current?.reset();
        const { error, success } = await contactSubmit(formData);
        if (error) {
          setError(error);
        }
        if (success) {
          setSuccess(success);
        }
      }}
      className="flex flex-col space-y-4 bg-zinc-100 p-5 w-full  lg:w-1/2 rounded-xl shadow-xl border"
    >
      {!success && (
        <>
          <h2 className="text-center text-2xl font-medium">Contact</h2>

          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-xs font-medium">
              First name
            </label>
            <Input
              type="text"
              name="firstName"
              placeholder="John"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-xs font-medium">
              Last name
            </label>
            <Input
              type="text"
              name="lastName"
              placeholder="Jackson"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailAddress" className="text-xs font-medium">
              Email address
            </label>
            <Input
              type="email"
              name="emailAddress"
              placeholder="jjackson@gmail.com"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs font-medium">
              Message
            </label>
            <TextArea
              name="message"
              placeholder="Message..."
              className="border rounded-md p-2 outline-red-500/80"
            ></TextArea>
          </div>
        </>
      )}

      <FormError message={error} />
      <FormSuccess message={success} />

      <SubmitButton
        onClick={() => {}}
        className={clsx(
          "bg-red-500 text-zinc-50 hover:brightness-125 transition duration-200 rounded-lg p-2",
          success && "hidden"
        )}
      />
    </form>
  );
};

export default ContactForm;
