"use client";

import { useSearchParams } from "next/navigation";
import { FlightAttendantSubmission } from "@/lib/data";
import { useEffect, useState } from "react";
import FlightAttendantsSearchInput from "@/components/form/FlightAttendantsSearchInput";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState<
    FlightAttendantSubmission[]
  >([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const handleSearchResults = (newResults: FlightAttendantSubmission[]) => {
    setSearchResults(newResults);
  };

  useEffect(() => {
    let storedResults: string | null = "";
    storedResults = sessionStorage.getItem("searchResults");
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);
  return (
    <section className="min-h-screen flex flex-col items-center justify-start gap-12 md:gap-8 py-12 px-8 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50">
      <FlightAttendantsSearchInput onSearch={handleSearchResults} />
      <h1>Search Results for "{searchQuery}"</h1>
      {searchResults.length > 0 ? (
        <div className="bg-zinc-50 p-6 rounded-md shadow-xl overflow-scroll overflow-x-hidden h-screen w-full flex flex-col gap-y-4">
          {searchResults.length === 1 ? (
            <p className="text-sm italic text-zinc-900">
              {searchResults.length} result
            </p>
          ) : (
            <p className="text-sm italic text-zinc-900">
              {searchResults.length} results
            </p>
          )}

          {searchResults.map(
            (pilot: FlightAttendantSubmission, index: number) => (
              <div
                key={index}
                className="rounded p-3 shadow-sm border border-zinc-200 text-zinc-900"
              >
                <p className="font-medium">
                  {pilot.firstName} {pilot.lastName} • {pilot.age}
                </p>
                <p>{pilot.gender}</p>
                <p>{pilot.nationality}</p>
                <p>{pilot.vipExperience} hours</p>
              </div>
            )
          )}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
};

export default SearchResultsPage;
