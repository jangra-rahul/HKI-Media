import PageBanner from "../../../components/Common/PageBanner";
import PortfolioCard from "../../../components/PortfolioColumnsFour/PortfolioCard";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Portfolio Columns Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Four"
        bgImg="/img/page-banner/page-banner19.jpg"
      />

      <PortfolioCard />
    </>
  );
}
