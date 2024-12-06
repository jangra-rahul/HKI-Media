import WeProvideServices from "@/components/About/WeProvideServices";
import AnimaticaBio from "@/components/Advertisements/AnimaticaBio";
import AnimaticaHero from "@/components/Animatica/AnimaticaHero";
import WhatWeDo from "@/components/HomeThree/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div>
      <AnimaticaHero />
      <AnimaticaBio />
      <WeProvideServices />
      <WhatWeDo />
    </div>
  );
};

export default page;
