"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const UpcomingMovies: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className=" ptb-100 "
        style={{ backgroundImage: `url(/img/latest-trailer-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            {/* <span>Latest Trailer</span> */}
            <h2 className="mb-0">Feature films</h2>
          </div>

          {/* <Swiper
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
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="latest-trailer-wrap-two"
          >
            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer1.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer2.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer3.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer4.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer5.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer6.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */}
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 mt-4">
              <Image
                data-aos="zoom-in-up"
                src="/img/latest-trailer/latest-trailer1.jpg"
                alt="Image"
                width={285}
                height={400}
                className="w-100 h-100"
              />
            </div>
            <div className="col-md-3 col-sm-6 mt-4">
              <Image
                data-aos="zoom-in-up"
                src="/img/latest-trailer/latest-trailer2.jpg"
                alt="Image"
                width={285}
                height={400}
                className="w-100 h-100"
              />
            </div>
            <div className="col-md-3 col-sm-6 mt-4">
              <Image
                data-aos="zoom-in-up"
                src="/img/latest-trailer/latest-trailer3.jpg"
                alt="Image"
                width={285}
                height={400}
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingMovies;
