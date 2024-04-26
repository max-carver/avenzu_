"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  className: string;
  onClick: () => void;
};

export const SubmitButton = ({ className, onClick }: SubmitButtonProps) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className={className}
      disabled={status.pending}
      onClick={onClick}
    >
      {status.pending ? "Loading...please be patient" : "Submit"}
    </button>
  );
};

export default SubmitButton;
