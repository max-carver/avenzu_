"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

type SubmitButtonProps = {
  className: string;
  onClick: () => void;
};

export const SubmitButton = ({ className, onClick }: SubmitButtonProps) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className={`${className} flex items-center justify-center text-center`}
      disabled={status.pending}
      onClick={onClick}
    >
      {status.pending ? <Spinner /> : "Submit"}
    </button>
  );
};

export default SubmitButton;
