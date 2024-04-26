"use client";

import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Input } from "@/components/form/Input";
import SubmitButton from "./SubmitButton";
import { useFormStatus } from "react-dom";
import { employerSubmit } from "@/actions/employerSubmission";

const EmployerForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const status = useFormStatus();

  return (
    <form
      ref={ref}
      action={async (formData) => {
        setError("");
        setSuccess("");
        const { error, success } = await employerSubmit(formData);
        if (error) {
          setError(error);
        }
        if (success) {
          setSuccess(success);
          ref.current?.reset();
        }
      }}
      className="flex flex-col space-y-5 bg-zinc-100 p-5 w-full lg:w-2/3 rounded-xl shadow-xl border"
    >
      <h2 className="text-center text-2xl font-medium">Employer enquiry</h2>
      <div className="flex flex-col">
        <label htmlFor="companyName" className="text-xs font-medium">
          Company name
        </label>
        <Input
          type="text"
          name="companyName"
          placeholder="Enter company name"
          className="border rounded-md p-2 outline-red-500/80"
        />
      </div>
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
        <label htmlFor="phoneNumber" className="text-xs font-medium">
          Phone number
        </label>
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="012 345 6789"
          className="border rounded-md p-2 outline-red-500/80"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="country" className="text-xs font-medium">
          Country
        </label>
        <Input
          type="text"
          name="country"
          placeholder="United Kingdom"
          className="border rounded-md p-2 outline-red-500/80"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="aircrafts" className="text-xs font-medium">
          Aircrafts
        </label>
        <sub className="text-xs italic text-zinc-400 mb-2">
          Select any that apply
        </sub>
        <div className="flex flex-col md:grid grid-cols-2 gap-1">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Censna"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Censna" className="text-sm">
              Censna
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Beechcraft"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Beechcraft" className="text-sm">
              Beechcraft
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="ATR"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="ATR" className="text-sm">
              ATR
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Embrear"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Embrear" className="text-sm">
              Embrear
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Legacy"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Legacy" className="text-sm">
              Legacy
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Bombardier"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Bombardier" className="text-sm">
              Bombardier
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="BombardierChallenger"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="BombardierChallenger" className="text-sm">
              Bombardier Challenger
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Gulfstream"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Gulfstream" className="text-sm">
              Gulfstream
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="Dassault"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="Dassault" className="text-sm">
              Dassault
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="aircrafts"
              value="DassaultFelcon"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="DassaultFelcon" className="text-sm">
              Dassault Felcon
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="aircraftRegNumber" className="text-xs font-medium">
          Aircraft registration number
        </label>
        <Input
          type="text"
          name="aircraftRegNumber"
          placeholder="Enter the registration number"
          className="border rounded-md p-2 outline-red-500/80"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="crewTypes" className="text-xs font-medium">
          Crew type
        </label>
        <sub className="text-xs italic text-zinc-400 mb-2">
          Select any that apply
        </sub>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="crewTypes"
              value="permanent"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="permanent" className="text-sm">
              Permanent
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="crewTypes"
              value="freelance/contract"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="freelance/contract" className="text-sm">
              Contract/freelance
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="positionsNeeded" className="text-xs font-medium">
          Select which position(s) your company needs
        </label>
        <sub className="text-xs italic text-zinc-400 mb-2">
          Select any that apply
        </sub>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="positionsNeeded"
              value="captain"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="captain" className="text-sm">
              Captain
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="positionsNeeded"
              value="firstOffice"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="firstOffice" className="text-sm">
              First office
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="positionsNeeded"
              value="flightAttendant"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="flightAttendant" className="text-sm">
              Flight attendant
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="operationType" className="text-xs font-medium">
          Type of operation
        </label>
        <sub className="text-xs italic text-zinc-400 mb-2">
          Select any that apply
        </sub>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="operationType"
              value="ownerFlights"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="permanent" className="text-sm">
              Owner flights (part 91)
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="operationType"
              value="chargerFlights"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="freelance/contract" className="text-sm">
              Charger flights (part 135)
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <input
              type="checkbox"
              name="operationType"
              value="scheduledAirline"
              className="cursor-pointer w-4 h-4"
              disabled={status.pending}
            />
            <label htmlFor="freelance/contract" className="text-sm">
              Scheduled airline (part 121)
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="additionalInfo" className="text-xs font-medium">
          Additional information
        </label>
        <Input
          type="text"
          name="additionalInfo"
          placeholder="Enter any useful additional information"
          className="border rounded-md p-2 outline-red-500/80"
        />
      </div>

      <FormError message={error} />

      <SubmitButton
        onClick={() => {
          setError("");
          setSuccess("");
        }}
        className={clsx(
          "bg-red-500 text-zinc-50 hover:brightness-125 transition duration-200 rounded-lg p-2 text-center"
        )}
      />
      <FormSuccess message={success} />
    </form>
  );
};

export default EmployerForm;
