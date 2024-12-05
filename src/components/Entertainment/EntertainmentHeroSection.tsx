"use client";

import React, { useState } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./entertainment.css";

const EntertainmentHeroSection = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className=" py-5 bg-black">
      {" "}
      <div className="container  pt-5">
        <h2 className="text-white text-center">SERVICES OFFERED</h2>
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-6">
            <h2 className="text-white">Multilingual film production</h2>
            <p className="text-white">
              We bring stories to life across languages, ensuring cultural
              relevance and emotional resonance
            </p>
          </div>
          <div className="col-3">
            <Image
              src="/img/latest-trailer/latest-trailer1.jpg"
              alt="Image"
              width={245}
              height={200}
              className="w-100 "
            />
          </div>
        </div>
        <div className="row align-items-center pb-5 justify-content-between mt-5">
          <div className="col-5">
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
                  slidesPerView: 1,
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
              <SwiperSlide>
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
              </SwiperSlide>

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

              <SwiperSlide>
                <div className="latest-trailer-item">
                  <Image
                    src="/img/latest-trailer/song5.jpg"
                    alt="Image"
                    width={285}
                    height={400}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-6 text-end">
            <h2 className="text-white">Multilingual film production</h2>
            <p className="text-white">
              We bring stories to life across languages, ensuring cultural
              relevance and emotional resonance
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-6">
            <h2 className="text-white">Landmark Films</h2>
            <p className="text-white">
              Our work on landmark films such as Yamuna Putra Angad demonstrates
              our capacity to create content that leaves a mark on both regional
              and national landscapes.
            </p>
          </div>
          <div className="col-3">
            <Image
              src="/img/latest-trailer/latest-trailer2.jpg"
              alt="Image"
              width={245}
              height={200}
              className="w-100 "
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-between mt-5 ">
          <div className="col-3">
            <Image
              src="/img/latest-trailer/image1.png"
              alt="Image"
              width={245}
              height={200}
              className="w-100 "
            />
          </div>
          <div className="col-6 text-end">
            <h2 className="text-white">Regional Studio Collaborations</h2>
            <p className="text-white">
              Having produced over 200 music videos, we showcase our ability to
              deliver high-impact visuals and sound.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentHeroSection;
