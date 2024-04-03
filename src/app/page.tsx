import LandingPageText from "@/components/LandingPageText";

export default function Home() {
  return (
    <main>
      <section className="bg-[url('../../public/black_gulf.webp')] bg-no-repeat bg-cover bg-center bg-fixed blackGulf-height shadow-blackGulf px-8 md:px-16 lg:px-32 flex items-center justify-center">
        <LandingPageText />
      </section>
    </main>
  );
}
