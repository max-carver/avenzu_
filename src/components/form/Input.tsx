"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  className: string;
};
export const Input = ({ type, name, placeholder, className }: InputProps) => {
  const status = useFormStatus();

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      disabled={status.pending}
      required
    />
  );
};

type TextAreaProps = {
  name: string;
  placeholder: string;
  className: string;
};
export const TextArea = ({ name, placeholder, className }: TextAreaProps) => {
  const status = useFormStatus();

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={className}
      disabled={status.pending}
      required
    ></textarea>
  );
};
