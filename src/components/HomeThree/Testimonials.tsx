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
        <div className="container">
          <Swiper
            // slidesPerView={6}
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
                  src="/img/partners/affiliations_logo8.jpeg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
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
                  src="/img/partners/affiliations_logo15.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="container">
          <Swiper
            slidesPerView={1}
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
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap-two"
          >
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client1.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client2.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Seth Ivan</h3>
                <span>Movie Editor</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client3.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>

                <h3>Riley Gilbert</h3>
                <span>Movie Composer</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </>
  );
};

export default Testimonials;
