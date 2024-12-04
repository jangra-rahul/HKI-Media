import PageBanner from "../../components/Common/PageBanner";
import AboutContent from "../../components/About/AboutContent";
import FunFacts from "../../components/About/FunFacts";
import WeProvideServices from "../../components/About/WeProvideServices";
import TeamStyleTwo from "../../components/Common/TeamStyleTwo";
import AwardWinningMovies from "../../components/Common/AwardWinningMovies";
import ContactWithUs from "../../components/Common/ContactWithUs";
import PartnersStyleThree from "../../components/Common/PartnersStyleThree";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImg="/img/page-banner/page-banner1.jpg"
      />

      <AboutContent />

      <FunFacts />

      <WeProvideServices />

      <TeamStyleTwo />

      <div className="bg-color">
        <AwardWinningMovies />
      </div>

      <ContactWithUs />

      <PartnersStyleThree />
    </>
  );
}
