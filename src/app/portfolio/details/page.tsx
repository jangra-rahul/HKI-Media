import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/PortfolioDetails/PortfolioDetailsContent";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Portfolio Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Details"
        bgImg="/img/page-banner/page-banner8.jpg"
      />

      <PortfolioDetailsContent />
    </>
  );
}
