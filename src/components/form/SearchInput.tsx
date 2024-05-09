"use client";

import getSearch from "@/actions/search";
import { FormEvent, useState } from "react";
import { PilotSubmission } from "@/lib/data";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await getSearch(searchTerm);
    if (typeof response === "string") {
      const data = JSON.parse(response) as PilotSubmission[];
      router.push(
        `/search?q=${encodeURIComponent(
          searchTerm
        )}&results=${encodeURIComponent(JSON.stringify(data))}`
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
        className="rounded-xl px-2 py-3 text-zinc-900 border outline-none border-transparent focus:border-red-500 w-3/4 rounded-r-none bg-red-500/10"
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

export default SearchInput;
