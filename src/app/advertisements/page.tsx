import EntertainmentHeroSection from "@/components/Entertainment/EntertainmentHeroSection";
import PageBanner from "../../components/Common/PageBanner";
import AdvertisementsHero from "@/components/Advertisements/AdvertisementsHero";
import WeProvideServices from "@/components/About/WeProvideServices";
import AboutContent from "@/components/About/AboutContent";
import About from "@/components/DefaultHome/About";
import About3 from "../../components/HomeTwo/About";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Advertisements"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Advertisements"
        bgImg="/img/page-banner/page-banner10.jpg"
      />

      {/* <WeProvideServices />
      <AdvertisementsHero /> */}

      {/* <About /> */}
      <About />
      <About3 />
      <AboutContent />
    </>
  );
}
