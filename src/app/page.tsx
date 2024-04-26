import UseCaseCard from "@/components/UseCaseCard";
import LandingPageText from "@/components/LandingPageText";
import Image from "next/image";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  const useCaseCards = [
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

  const serviceCards = [
    {
      title: "Flight attendants",
      text: "Our mentorship programme ensures that our candidates are at the prestigious level we stand by, followed by our recruiting and placements which focus on matching our exceptional crew with the perfect aviation operator.",
      icon: <MdAirplanemodeActive size={36} className="text-red-500" />,
    },
    {
      title: "Pilots",
      text: "We understand the difficulties that pilots face when it comes to finding the right placement. Therefore it is our key objective to match you with the perfect full-time, part-time or temporary assignment.",
      icon: <MdAirplanemodeActive size={36} className="text-red-500" />,
    },
    {
      title: "Operators seeking air crew",
      text: "We are proud of our mentorship programme and the candidates we endorse Operators now have the opportunity to easily browse through our available recruits and make direct contact with us.",
      icon: <IoBriefcase size={36} className="text-red-500" />,
    },
    {
      title: "Additional services",
      text: "For our recruits, we can assists with transport arrangement, hotel bookings and visas. For our operators, we can handle VIP jet cabin outfitting and support, with all your personal requirements in mind.",
      icon: <FaPlus size={36} className="text-red-500" />,
    },
  ];

  return (
    <main>
      <section className="bg-[url('../../public/black_gulf.webp')] bg-no-repeat bg-cover bg-center bg-fixed blackGulf-height shadow-blackGulf px-8 md:px-16 lg:px-32 flex items-center justify-center">
        <LandingPageText />
      </section>

      <section className="px-8 md:px-16 lg:px-32 md:flex-row flex-col flex items-center gap-5 w-full py-12">
        {useCaseCards.map((card) => (
          <UseCaseCard
            key={card.title}
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
        <div className="md:flex-row flex-col flex md:items-center gap-6 justify-between mt-8">
          <div className="flex flex-col gap-y-4 w-full md:w-1/2">
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
          <div className="w-full md:w-1/2 h-[350px] relative">
            <Image
              src="/gulfstream-interior.jpg"
              alt="Gulfstream interior"
              fill={true}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-32 py-12 flex flex-col md:grid grid-cols-2 gap-8">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </section>

      <section className="px-8 md:px-16 lg:px-32 py-12 ">
        <FAQAccordion />
      </section>
    </main>
  );
}
