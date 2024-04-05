import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <main className="px-8 md:px-16 lg:px-32 bg-zinc-100">
      <section className="py-12 min-h-screen lg:flex-row flex-col flex items-center justify-between gap-12 w-full">
        <div className="flex flex-col items-start w-full lg:w-1/2 gap-y-5">
          <h1 className="text-4xl font-medium ">Get in touch</h1>
          <p className="text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            quia dolores sed repellat quam accusamus aspernatur facilis
            architecto! Aspernatur temporibus suscipit commodi animi quaerat
            tempore, quis enim laboriosam! Similique.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
