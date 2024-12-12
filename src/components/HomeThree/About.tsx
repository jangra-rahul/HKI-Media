"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./three.css";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area-two three bg-color-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Breeding Creativity, Bleeding Innovation</span>
                <h2 className="fs-2">
                  Welcome to HKI Media: Redefining Creativity, Technology and
                  the Media Industry
                </h2>
                <p>
                  Sparking a revolution in the media industry. We’re a
                  game-changing startup with our sights set high, transforming
                  the Indian media landscape with bold innovation and visionary
                  thinking. With our finger on the pulse of the industry, we're
                  crafting a dynamic business blueprint that's got everyone
                  buzzing.
                </p>
                <p className="pt-2">
                  So, fasten your seatbelts—HKI Media is here to shake up the
                  industry, ignite imaginations, and create a legacy of
                  unforgettable stories, one creative masterpiece at a time.
                </p>

                <button className="default-btn three">Learn More</button>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <div className="row">
                <div className="col-lg-4 col-sm-6 p-0">
                  <div data-aos="zoom-in-up" className="about-grid-img mb-0">
                    <Image
                      src="/img/about-grid/about-grid1.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div data-aos="zoom-in-up" className="about-grid-img mb-0">
                    <Image
                      src="/img/about-grid/about-grid2.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 m-rs mb-0"
                  >
                    <Image
                      src="/img/about-grid/about-grid3.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div data-aos="zoom-in-up" className="about-grid-img mb-0 mb-0">
                    <Image
                      src="/img/about-grid/about-grid4.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 m-rs mb-0"
                  >
                    <Image
                      src="/img/about-grid/about-grid3.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div data-aos="zoom-in-up" className="about-grid-img mb-0 mb-0">
                    <Image
                      src="/img/about-grid/about-grid4.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
              </div> */}
              {/* <Image
                className="w-100 "
                src="/img/grid_img.png"
                alt="Image"
                width={295}
                height={346}
              /> */}
              <div className="container d-md-flex d-none">
                <div className="row  g-3 d_grid">
                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 grid1"
                  >
                    <Image
                      style={{ height: "225px" }}
                      className=""
                      src="/img/grig3.png"
                      alt="Image"
                      width={700}
                      height={100}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 h-100 grid2 mb-0"
                  >
                    <Image
                      style={{ height: "290px" }}
                      src="/img/grig2.png"
                      alt="Image"
                      width={400}
                      height={250}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 grid3"
                  >
                    <Image
                      style={{ height: "225px" }}
                      src="/img/about-grid/about-grid3.jpg"
                      alt="Image"
                      width={400}
                      height={250}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 grid4"
                  >
                    <Image
                      style={{ height: "235px" }}
                      className=""
                      src="/img/grig4.png"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 grid5 mt-0"
                  >
                    <Image
                      style={{ height: "170px" }}
                      src="/img/grig6.png"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-up"
                    className="about-grid-img mb-0 grid6"
                  >
                    <Image
                      style={{ height: "235px" }}
                      className=""
                      src="/img/grig4.png"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
              </div>
              <div className="d-md-none container d-block">
                {" "}
                <div className="">
                  <div className="row ">
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid1.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid2.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0 m-rs mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid3.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0 mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid4.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0 m-rs mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid3.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 p-0">
                      <div
                        data-aos="zoom-in-up"
                        className="about-grid-img mb-0 mb-0"
                      >
                        <Image
                          src="/img/about-grid/about-grid4.jpg"
                          alt="Image"
                          width={295}
                          height={246}
                        />
                      </div>
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

export default About;
