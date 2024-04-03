import Card from "@/components/Card";
import LandingPageText from "@/components/LandingPageText";

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

      <section className="px-8 md:px-16 lg:px-32 flex items-center gap-x-5 w-full py-8">
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
    </main>
  );
}
