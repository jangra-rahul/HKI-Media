"use client";

import React, { useState } from "react";
import "./media.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const MediaMatrixHero = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className=" py-5">
      <div className=" container">
        <section className="media-matrix-section">
          <div className="row justify-content-between align-items-center">
            {/* Left Text Section */}
            <div className="col-lg-5 col-md-12 text-box">
              <h2 className="section-title text-start">
                MEDIA MATRIX APP - INTEGRATING THE INDIAN MEDIA & ENTERTAINMENT
                INDUSTRY
              </h2>
              <p className="section-description text-start">
                Introducing the Media Matrix App—a revolutionary platform
                transforming the media and entertainment landscape. By enabling
                seamless, rating-based hiring and real-time casting of artists,
                it bridges the gap between talent and opportunity like never
                before.
              </p>
              <p className="section-description text-start">
                The app fosters faster collaboration among creative agencies,
                streamlining projects from ideation to execution. It also offers
                a dedicated module for celebrity hiring for events and
                endorsements, simplifying high-impact campaigns.
              </p>
              <p className="section-description text-start">
                With features that aggregate media services, enhance
                transparency, and promote inclusivity, the Media Matrix App is
                set to redefine how the industry connects, collaborates, and
                creates. It’s not just a platform—it’s the future of media
                synergy.
              </p>
            </div>

            {/* Right Screenshot Section */}
            <div className="col-lg-6">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                speed={1500}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="latest-trailer-slider"
              >
                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <Image
                      src="/img/media1.png"
                      alt="Image"
                      width={285}
                      height={400}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <Image
                      src="/img/media2.png"
                      alt="Image"
                      width={285}
                      height={400}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <Image
                      src="/img/media3.png"
                      alt="Image"
                      width={285}
                      height={400}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <Image
                      src="/img/media4.png"
                      alt="Image"
                      width={285}
                      height={400}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <Image
                      src="/img/media5.png"
                      alt="Image"
                      width={285}
                      height={400}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaMatrixHero;
