import WeProvideServices from "@/components/About/WeProvideServices";
import AnimaticaBio from "@/components/Advertisements/AnimaticaBio";
import AnimaticaHero from "@/components/Animatica/AnimaticaHero";
import PageBanner from "@/components/Common/PageBanner";
import ContactForm from "@/components/Contact/ContactForm";
import ExclusiveShop from "@/components/DefaultHome/ExclusiveShop";
import WhatWeDo from "@/components/HomeThree/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div>
      <AnimaticaHero />
      <AnimaticaBio />
      <WeProvideServices />
      <WhatWeDo />
      <ExclusiveShop />
      <ContactForm />
    </div>
  );
};

export default page;
