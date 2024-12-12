"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "../Entertainment/entertainment.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="bg-black pb-100">
        <h2 className="text-center text-white">Our Partners</h2>
        <div className="container d-lg-flex d-none mt-4">
          <div className="row">
            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo1.jpg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo2.png"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo3.jpg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo4.webp"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo5.jpg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo6.png"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo7.png"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo8.jpeg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo9.jpeg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo10.jpg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo11.png"
                alt="Image"
                width={180}
                height={100}
              />
            </div>

            <div className="testimonial-text col-2 ">
              <Image
                data-aos="zoom-in-up"
                src="/img/partners/logo12.jpg"
                alt="Image"
                width={180}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="container d-lg-none d-black">
          <Swiper
            // slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={100}
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
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap-two pt-4 align-items-center"
          >
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo1.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo2.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo3.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo4.webp"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo5.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo6.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo7.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo8.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo9.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo10.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo11.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/logo12.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h2 className="text-center text-white pt-5 pb-4 ">Affiliation</h2>
        <div className="container">
          <Swiper
            // slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={100}
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
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap-two align-items-center"
          >
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo1.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo2.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo3.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo4.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo5.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo7.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo8.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            // slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={100}
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
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap-two mt-4 align-items-center"
          >
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo9.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo10.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo11.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo12.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo13.png"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo14.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  data-aos="zoom-in-up"
                  src="/img/partners/affiliations_logo15.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
