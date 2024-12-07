// import SkillHeroSection from "@/components/SkillingPage/SkillHeroSection";
import PageBanner from "@/components/Common/PageBanner";
import Achievements from "@/components/HomeThree/Achievements";
import MapComponent from "@/components/SkillingPage/MapComponent";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <SkillHeroSection /> */}
      <PageBanner
        pageTitle="Skilling"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Skilling"
        bgImg="/img/page-banner/page-banner10.jpg"
      />
      <Achievements />
      <MapComponent />
    </div>
  );
};

export default page;
