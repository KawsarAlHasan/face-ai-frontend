import React from "react";
import Banner from "./sections/banner/Banner";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/pricing/Pricing";
import FAQSection from "./sections/FAQ";
import TransformCTA from "./sections/TransformCTA";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQSection />
      <section className="pt-10 lg:pt-20">
        <TransformCTA />
      </section>
    </section>
  );
}
