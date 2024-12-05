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
          <div className="col-md-8 col-12 mt-4 mt-md-0">
            <h2 className="text-white">Multilingual film production</h2>
            <p className="text-white">
              We specialize in bringing stories to life across multiple
              languages, ensuring cultural relevance and emotional depth for
              audiences worldwide. Our multilingual film production process goes
              beyond mere translation—it’s about adapting stories to resonate
              with diverse cultures while preserving their core essence. From
              script adaptation to voice dubbing and subtitling, every detail is
              handled with precision by language experts and cultural
              consultants. By collaborating with international talents and
              leveraging innovative cinematography, we create films that break
              linguistic barriers and connect deeply with global audiences. Our
              mission is to craft cinematic experiences that unite people
              through the universal language of emotions, making your story
              truly unforgettable across cultures.
            </p>
          </div>
          <div className="col-md-3 col-12 mt-4 mt-md-0">
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
          <div className="col-md-5 col-12 mt-4 mt-md-0">
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
          <div className="col-md-7 col-12 mt-4 mt-md-0 text-end">
            <h2 className="text-white">200+ Music Videos</h2>
            <p className="text-white">
              With a portfolio of over 200 music videos, we have mastered the
              art of blending stunning visuals with captivating soundscapes.
              Each project reflects our commitment to creativity, precision, and
              storytelling, ensuring every frame leaves a lasting impression.
              From conceptualization to post-production, we bring a unique touch
              to every music video, creating experiences that resonate deeply
              with audiences. Our ability to adapt to diverse musical genres and
              artistic visions showcases our versatility and passion for
              delivering high-impact audiovisual masterpieces.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-md-8 col-12 mt-4 mt-md-0">
            <h2 className="text-white">Landmark Films</h2>
            <p className="text-white">
              Our journey in filmmaking is defined by projects that leave an
              indelible mark on audiences, both regionally and nationally.
              Landmark productions like Yamuna Putra Angad stand as a testament
              to our ability to create stories that resonate deeply with diverse
              viewers. By combining compelling narratives, powerful
              performances, and cutting-edge production techniques, we ensure
              every film becomes a cultural milestone. Through these projects,
              we continue to shape the cinematic landscape, delivering
              experiences that inspire, entertain, and endure the test of time.
            </p>
          </div>
          <div className="col-md-3 col-12 mt-4 mt-md-0">
            <Image
              src="/img/latest-trailer/latest-trailer2.jpg"
              alt="Image"
              width={245}
              height={200}
              className="w-100 "
            />
          </div>
        </div>
        <div className="row align-items-center pt-5 justify-content-between mt-5 ">
          <div className="col-md-3 col-12 mt-4 mt-md-0">
            <Image
              src="/img/latest-trailer/image1.png"
              alt="Image"
              width={245}
              height={200}
              className="w-100 "
            />
          </div>
          <div className="col-md-8 col-12 mt-4 mt-md-0 text-end">
            <h2 className="text-white">Regional Studio Collaborations</h2>
            <p className="text-white">
              Our extensive experience in producing over 200 music videos
              highlights our expertise in creating high-impact visuals and
              immersive soundscapes. Collaborating with regional studios allows
              us to tap into diverse cultural aesthetics and local talent,
              resulting in projects that are authentic and relatable. These
              partnerships enable us to craft unique content that not only
              elevates regional artistry but also resonates with a broader
              audience. Together, we bring a seamless blend of creativity,
              innovation, and technical excellence to every production, making
              each project a standout achievement in its own right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentHeroSection;
