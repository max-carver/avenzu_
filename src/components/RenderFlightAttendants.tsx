import { getFlightAttendants } from "@/lib/fetchData";

const RenderFlightAttendants = async () => {
  const flightAttendants = await getFlightAttendants();
  console.log(flightAttendants);

  return (
    <>
      <div className="bg-zinc-50 p-6 rounded-md shadow-xl overflow-scroll overflow-x-hidden h-screen w-full flex flex-col gap-y-4">
        <p className="text-zinc-950 text-left text-sm italic">
          {flightAttendants.length} of {flightAttendants.length}{" "}
          flightAttendants
        </p>
        {flightAttendants &&
          flightAttendants.map((attendant, index) => (
            <div
              key={index}
              className="rounded p-3 shadow-sm border border-zinc-200 text-zinc-900"
            >
              <p className="font-medium">
                {attendant.firstName} {attendant.lastName} • {attendant.age}
              </p>
              <p>{attendant.gender}</p>
              <p>{attendant.nationality}</p>
              <p>{attendant.totalTime} hours</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default RenderFlightAttendants;
