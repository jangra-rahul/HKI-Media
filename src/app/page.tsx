import MainBanner from "../../src/components/HomeThree/MainBanner";
import About from "../../src/components/HomeThree/About";
import VideoCreated from "../../src/components/HomeThree/VideoCreated";
import Testimonials from "../../src/components/HomeThree/Testimonials";
import UpcomingMovies from "../../src/components/HomeThree/UpcomingMovies";
import WhatWeDo from "../../src/components/HomeThree/WhatWeDo";
import TeamMember from "../../src/components/HomeThree/TeamMember";
import ProductionProcess from "../../src/components/HomeThree/ProductionProcess";
import LatestNews from "../../src/components/HomeThree/LatestNews";
import Partners from "../../src/components/Common/Partners";
// import AwardWinningMovies from "../../src/components/HomeThree/AwardWinningMovies";

export default function Home() {
  return (
    <>
      {/* <HeroSlider />

      <About />

      <VideoCreated />

      <WhatWeDo />

      <Testimonials />

      <AwardWinningMovies />

      <GetInTouch />

      <UpcomingMovies />

      <ExclusiveShop />

      <TeamStyleOne />

      <Partners />

      <LatestNews /> */}
      <MainBanner />

      <About />

      <VideoCreated />

      <Testimonials />

      <UpcomingMovies />

      {/* <WhatWeDo /> */}

      <TeamMember />

      <ProductionProcess />

      {/* <AwardWinningMovies /> */}

      <LatestNews />

      <Partners />
    </>
  );
}
