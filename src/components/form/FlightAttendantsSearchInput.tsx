"use client";

import getFlightAttendantsSearch from "@/actions/flightAttendantsSearch";
import { FormEvent, useState } from "react";
import { FlightAttendantSubmission } from "@/lib/data";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  onSearch?: (results: FlightAttendantSubmission[]) => void;
}

const FlightAttendantsSearchInput = ({ onSearch }: SearchInputProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await getFlightAttendantsSearch(searchTerm);
    if (typeof response === "string") {
      const data = JSON.parse(response) as FlightAttendantSubmission[];
      if (onSearch) {
        onSearch(data);
      }
      sessionStorage.setItem("searchResults", JSON.stringify(data));
      router.push(
        `/flight-attendants/candidates/search?q=${encodeURIComponent(
          searchTerm
        )}`
      );
    } else {
      console.error("Error fetching data");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto flex items-center gap-0 w-3/5"
    >
      <input
        type="text"
        name="search"
        id="search"
        className="rounded-xl px-2 py-3 text-zinc-50 border outline-none border-transparent focus:border-red-500 w-3/4 rounded-r-none bg-red-500/10"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search..."
      />
      <button
        className="border border-red-500 bg-red-500 hover:brightness-125 transition duration-300 w-1/4 text-zinc-50 font-semibold text-center px-2 py-3 rounded-xl rounded-l-none"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default FlightAttendantsSearchInput;
