"use client";

import React, { ChangeEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import Select from "react-select";
type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({
  type,
  name,
  placeholder,
  className,
  onChange,
}: InputProps) => {
  const status = useFormStatus();

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border-zinc-400 hover:border-zinc-500 transition duration-200 ${className}`}
      disabled={status.pending}
      required
      onChange={onChange}
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
      className={`border-zinc-400 hover:border-zinc-500 transition duration-200 ${className}`}
      disabled={status.pending}
      required
    ></textarea>
  );
};

type SelectMenuProps = {
  name: string;
};

export const GenderSelectMenu = ({ name }: SelectMenuProps) => {
  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];
  return (
    <Select
      name={name}
      options={options}
      className="border-zinc-400 cursor-pointer"
    />
  );
};

type CheckboxProps = {
  value: string;
};

export const Checkbox = ({ value }: CheckboxProps) => {
  return <input type="checkbox" value={value} />;
};
