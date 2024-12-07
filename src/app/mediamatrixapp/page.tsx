import PageBanner from "@/components/Common/PageBanner";
import MediaMatrixHero from "@/components/MediaNatrixApp/MediaMatrixHero";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner
        pageTitle="Media Matrix App"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Media Matrix App"
        bgImg="/img/page-banner/page-banner10.jpg"
      />
      <MediaMatrixHero />
    </div>
  );
};

export default page;
