"use client";

import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import { GenderSelectMenu, Input } from "@/components/form/Input";
import SubmitButton from "./SubmitButton";
import { UploadIcon } from "@radix-ui/react-icons";
import { pilotSubmit } from "@/actions/pilotSubmission";

const PilotForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [selectedPhotoName, setSelectedPhotoName] = useState<string | null>("");
  const [selectedCVName, setSelectedCVName] = useState<string | null>("");

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const photoFile = event.target.files?.[0];
    if (photoFile) {
      setSelectedPhotoName(photoFile.name);
    }
  };
  const handleCVChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cvFile = event.target.files?.[0];
    if (cvFile) {
      setSelectedCVName(cvFile.name);
    }
  };
  return (
    <form
      ref={ref}
      action={async (formData) => {
        setError("");
        setSuccess("");
        ref.current?.reset();
        const { error, success } = await pilotSubmit(formData);
        if (error) {
          setError(error);
        }
        if (success) {
          setSuccess(success);
        }
      }}
      className="flex flex-col space-y-5 bg-zinc-100 p-5 w-full lg:w-2/3 rounded-xl shadow-xl border"
    >
      {!success && (
        <>
          <h2 className="text-center text-2xl font-medium">Pilots</h2>

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
            <label htmlFor="age" className="text-xs font-medium">
              Age
            </label>
            <Input
              type="number"
              name="age"
              placeholder="25"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-xs font-medium">
              Gender
            </label>
            <GenderSelectMenu name="gender" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nationality" className="text-xs font-medium">
              Nationality
            </label>
            <Input
              type="text"
              name="nationality"
              placeholder="South African"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-xs font-medium">
              Country of residence
            </label>
            <Input
              type="text"
              name="country"
              placeholder="United Kingdom"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="licenses" className="text-xs font-medium">
              Licenses
            </label>
            <sub className="text-xs italic text-zinc-400 mb-2">
              Select all that apply
            </sub>
            <div className="flex flex-col md:grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="licenses"
                  value="ICAO"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="ICAO" className="text-sm">
                  ICAO
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="licenses"
                  value="FAA"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="FAA" className="text-sm">
                  FAA
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="licenses"
                  value="UKCAA"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="UKCAA" className="text-sm">
                  UKCAA
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="licenses"
                  value="EASA"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="EASA" className="text-sm">
                  EASA
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="aircrafts" className="text-xs font-medium">
              Aircrafts
            </label>
            <sub className="text-xs italic text-zinc-400 mb-2">
              Select all that apply
            </sub>
            <div className="flex flex-col md:grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="aircrafts"
                  value="Censna"
                  className="cursor-pointer w-4 h-4"
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
                />
                <label htmlFor="DassaultFelcon" className="text-sm">
                  Dassault Felcon
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="totalTime" className="text-xs font-medium">
              Total time (in hours)
            </label>
            <Input
              type="text"
              name="totalTime"
              placeholder="160"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="jobTypes" className="text-xs font-medium">
              Job type
            </label>
            <sub className="text-xs italic text-zinc-400 mb-2">
              Select all that apply
            </sub>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1 w-full">
                <input
                  type="checkbox"
                  name="jobTypes"
                  value="permanent"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="permanent" className="text-sm">
                  Permanent
                </label>
              </div>
              <div className="flex items-center gap-1 w-full">
                <input
                  type="checkbox"
                  name="jobTypes"
                  value="freelance/contract"
                  className="cursor-pointer w-4 h-4"
                />
                <label htmlFor="freelance/contract" className="text-sm">
                  Contract/freelance
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="visas" className="text-xs font-medium">
              Visas
            </label>
            <sub className="text-xs italic text-zinc-400 mb-2">
              Separated by a comma
            </sub>
            <Input
              type="text"
              name="visas"
              placeholder="Working, tourist, etc"
              className="border rounded-md p-2 outline-red-500/80"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex flex-col items-center justify-center outline-1 outline-dashed outline-zinc-400 relative p-2 rounded-md w-full cursor-pointer">
              <label htmlFor="photoUpload" className="text-xs font-medium">
                Photo upload
              </label>

              <UploadIcon
                className={clsx("w-5 h-5", selectedPhotoName && "hidden")}
              />
              <Input
                type="file"
                name="photoUpload"
                className="opacity-0 absolute w-full"
                onChange={handlePhotoChange}
              />
              <p>{selectedPhotoName && selectedPhotoName}</p>
              <p>{selectedPhotoName && "Replace"}</p>
            </div>

            <div className="flex flex-col items-center justify-center outline-1 outline-dashed outline-zinc-400 relative p-2 rounded-md w-full cursor-pointer">
              <label htmlFor="cvUpload" className="text-xs font-medium">
                CV upload
              </label>

              <UploadIcon
                className={clsx("w-5 h-5", selectedCVName && "hidden")}
              />
              <Input
                type="file"
                name="cvUpload"
                className="opacity-0 absolute w-full"
                onChange={handleCVChange}
              />
              <p>{selectedCVName && selectedCVName}</p>
              <p>{selectedCVName && "Replace"}</p>
            </div>
          </div>
        </>
      )}

      <FormError message={error} />
      <FormSuccess message={success} />

      <SubmitButton
        className={clsx(
          "bg-red-500 text-zinc-50 hover:brightness-125 transition duration-200 rounded-lg p-2",
          success && "hidden"
        )}
      />
    </form>
  );
};

export default PilotForm;
