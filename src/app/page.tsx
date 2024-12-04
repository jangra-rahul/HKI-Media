import HeroSlider from "../components/DefaultHome/HeroSlider";
import About from "../components/DefaultHome/About";
import VideoCreated from "../components/DefaultHome/VideoCreated";
import WhatWeDo from "../components/DefaultHome/WhatWeDo";
import Testimonials from "../components/Common/Testimonials";
import AwardWinningMovies from "../components/Common/AwardWinningMovies";
import GetInTouch from "../components/Common/GetInTouch";
import UpcomingMovies from "../components/DefaultHome/UpcomingMovies";
import ExclusiveShop from "../components/DefaultHome/ExclusiveShop";
import TeamStyleOne from "../components/Common/TeamStyleOne";
import LatestNews from "../components/DefaultHome/LatestNews";
import Partners from "../components/Common/Partners";

export default function Home() {
  return (
    <>
      <HeroSlider />

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

      <LatestNews />
    </>
  );
}
