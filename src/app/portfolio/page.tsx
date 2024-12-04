import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import PortfolioCard from "../../components/PortfolioColumnsTwo/PortfolioCard";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Portfolio Columns Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Two"
        bgImg="/img/page-banner/page-banner16.jpg"
      />

      <PortfolioCard />
    </>
  );
};
