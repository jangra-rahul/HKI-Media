import PageBanner from "../../../components/Common/PageBanner";
import PortfolioCard from "../../../components/PortfolioColumnsThree/PortfolioCard";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Portfolio Columns Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Three"
        bgImg="/img/page-banner/page-banner17.jpg"
      />

      <PortfolioCard />
    </>
  );
}
