"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  className: string;
};

export const SubmitButton = ({ className }: SubmitButtonProps) => {
  const status = useFormStatus();
  return (
    <button type="submit" className={className} disabled={status.pending}>
      {status.pending ? "loading" : "Submit"}
    </button>
  );
};

export default SubmitButton;
