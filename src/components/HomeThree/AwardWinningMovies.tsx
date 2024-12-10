"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../Entertainment/entertainment.css";

const AwardWinningMovies: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("tab1");

  const openTabSection = (tabName: string) => {
    const tabcontent = document.getElementsByClassName("tabs-item");
    for (let i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).classList.remove("fadeInUp");
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    const tablinks = document.getElementsByTagName("li");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = "block";
      selectedTab.className += " fadeInUp animated";
    }

    setCurrentTab(tabName);
  };

  return (
    <>
      <div className=" three py-5 jarallax">
        <div className="container">
          <div className="section-title white-title">
            {/* <span>Products</span> */}
            <h2 className="text-black">SERVICES OFFERED</h2>
          </div>

          <div className="tab award-winning-tab">
            <ul className="tabs-nav">
              <li
                className={currentTab === "tab1" ? "current" : ""}
                onClick={() => openTabSection("tab1")}
              >
                <span>Films</span>
              </li>
              <li onClick={() => openTabSection("tab2")}>
                <span>Music</span>
              </li>
              <li onClick={() => openTabSection("tab3")}>
                <span>Landmark Films</span>
              </li>
              <li onClick={() => openTabSection("tab4")}>
                <span>Studio</span>
              </li>
              {/* <li onClick={() => openTabSection("tab5")}>
                <span>2004</span>
              </li> */}
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      <Image
                        src="/img/latest-trailer/latest-trailer1.jpg"
                        alt="Image"
                        width={300}
                        height={490}
                      />
                      {/* <Image
                        src="/img/products-img.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      /> */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Film Festival</span> */}
                      <h2>Multilingual film production</h2>
                      <p>
                        We bring stories to life across languages, ensuring
                        cultural relevance and emotional resonance. Our
                        multilingual film production bridges linguistic divides,
                        connecting narratives with global audiences. From script
                        adaptation to casting and dubbing, we celebrate
                        diversity while preserving each storys essence.
                      </p>

                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      {/* <Image
                        src="/img/products-img-2.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      /> */}
                      <Swiper
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        speed={1000}
                        autoplay={{
                          delay: 6500,
                          disableOnInteraction: true,
                          pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          992: {
                            slidesPerView: 2,
                          },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="latest-trailer-wrap-two pb-5"
                      >
                        {/* <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song3.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song4.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide> */}

                        <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song1.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song2.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song6.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                          <div className="latest-trailer-item">
                            <Image
                              src="/img/latest-trailer/song5.jpg"
                              alt="Image"
                              width={285}
                              height={400}
                            />
                          </div>
                        </SwiperSlide> */}
                      </Swiper>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Vivi Bio</span> */}
                      <h2>200+ Music Videos</h2>
                      <p>
                        Having produced over 200 music videos, we showcase our
                        expertise in creating high-impact visuals that
                        seamlessly harmonize with music, elevating storytelling
                        through dynamic imagery. Our work captures the essence
                        of every beat, delivering compelling experiences that
                        resonate with audiences worldwide.
                      </p>

                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      {/* <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      /> */}
                      <Image
                        src="/img/latest-trailer/latest-trailer2.jpg"
                        alt="Image"
                        width={345}
                        height={100}
                        className=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Vivi Bio</span> */}
                      <h2>Landmark Films</h2>
                      <p>
                        Our work on landmark films like Yamuna Putra Angad
                        highlights our dedication to creating compelling stories
                        that resonate across cultures. By blending powerful
                        narratives with cinematic excellence, we leave a lasting
                        mark on both regional and national landscapes, shaping
                        memorable experiences for diverse audiences.
                      </p>

                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab4" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      <Image
                        src="/img/latest-trailer/latest-trailer3.jpg"
                        alt="Image"
                        width={345}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Regional Studio Collaborations</span> */}
                      <h2>Regional Studio Collaborations</h2>
                      <p>
                        Through collaborations with regional studios, we deliver
                        cost-effective productions that maintain the highest
                        standards of quality. These partnerships allow us to
                        create authentic, localized content while optimizing
                        resources and enhancing creative output.
                      </p>

                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab5" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Vivi Bio</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardWinningMovies;
