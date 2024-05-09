import RenderPilots from "@/components/RenderPilots";
import SearchInput from "@/components/form/SearchInput";

const Candidates = async () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-start gap-12 md:gap-8 py-12 px-8 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50">
        <h1 className="text-4xl font-semibold text-center">Pilot Candidates</h1>
        <SearchInput />
        <RenderPilots />
      </section>
    </main>
  );
};

export default Candidates;
