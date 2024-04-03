import Card from "@/components/Card";
import LandingPageText from "@/components/LandingPageText";
import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "Operator wanting to hire",
      text: "Get access to our specialized candidate database. Find the perfect crew for your company.",
      linkOneText: "Learn more",
      linkOneHref: "/employers",
    },
    {
      title: "Candidate wanting to apply",
      text: "Fill out an application and get recruited.",
      linkOneText: "Pilot",
      linkOneHref: "/pilots",
      linkTwoText: "Flight attendant",
      linkTwoHref: "/flight-attendants",
    },
  ];
  return (
    <main>
      <section className="bg-[url('../../public/black_gulf.webp')] bg-no-repeat bg-cover bg-center bg-fixed blackGulf-height shadow-blackGulf px-8 md:px-16 lg:px-32 flex items-center justify-center">
        <LandingPageText />
      </section>

      <section className="px-8 md:px-16 lg:px-32 flex items-center gap-x-5 w-full py-12">
        {cards.map((card) => (
          <Card
            title={card.title}
            text={card.text}
            linkOneText={card.linkOneText}
            linkOneHref={card.linkOneHref}
            linkTwoText={card.linkTwoText}
            linkTwoHref={card.linkTwoHref}
          />
        ))}
      </section>

      <section className="px-8 md:px-16 lg:px-32 py-12 w-full">
        <h3 className="text-2xl font-medium">
          Tailored solutions for your aviation needs
        </h3>
        <h4 className="text-xl text-zinc-600">Your success, our committment</h4>
        <div className="flex items-stretch gap-x-6 justify-between mt-8">
          <div className="flex flex-col gap-y-4 w-1/2">
            <p className="text-zinc-700 text-sm">
              We are Avenzu, a personalized recruitment and mentorship service
              provider. Our key focus is to ensure that our staff are a perfect
              fit for their aviation placements, thereby creating a service that
              keeps both our client and our crew satisfied and comfortable.
            </p>
            <p className="text-zinc-700 text-sm">
              We specialize in bridging the gap between high level aviation
              staffing requirements and candidates pursuing a career within the
              business aviation and premier airline industry. Ultimately, we
              provide an exceptional and much needed service to both the
              aviation key stakeholders and the individual.
            </p>
            <p className="text-zinc-700 text-sm">
              We take pride in our fast, current, and easy to use online
              platform that enables seamless candidate registration as well as
              quick browsing for aviation companies to scan through our fully
              vetted staffing database.
            </p>
          </div>
          <Image
            src="/gulfstream-interior.jpg"
            alt="Gulfstream interior"
            width={450}
            height={700}
            className="rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
