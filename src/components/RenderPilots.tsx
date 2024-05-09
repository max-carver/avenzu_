import { getPilots } from "@/lib/fetchData";
import React from "react";

const RenderPilots = async () => {
  const pilots = await getPilots();
  return (
    <>
      <div className="bg-zinc-50 p-6 rounded-md shadow-xl overflow-scroll overflow-x-hidden h-screen w-full flex flex-col gap-y-4">
        <p className="text-zinc-950 text-left text-sm italic">
          {pilots.length} of {pilots.length} pilots
        </p>
        {pilots &&
          pilots.map((pilot, index) => (
            <div
              key={index}
              className="rounded p-3 shadow-sm border border-zinc-200 text-zinc-900"
            >
              <p className="font-medium">
                {pilot.firstName} {pilot.lastName} • {pilot.age}
              </p>
              <p>{pilot.gender}</p>
              <p>{pilot.nationality}</p>
              <p>{pilot.totalTime} hours</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default RenderPilots;
