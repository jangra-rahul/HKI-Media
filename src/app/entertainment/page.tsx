import EntertainmentHeroSection from "@/components/Entertainment/EntertainmentHeroSection";
import PageBanner from "../../components/Common/PageBanner";
import AwardWinningMovies from "@/components/HomeThree/AwardWinningMovies";

export default function Page() {
  return (
    <>
      {/* <PageBanner
        pageTitle="Entertainment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Entertainment"
        bgImg="/img/page-banner/page-banner3.jpg"
      /> */}
      {/* <EntertainmentHeroSection /> */}
      <AwardWinningMovies />
    </>
  );
}
