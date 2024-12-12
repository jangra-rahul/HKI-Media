"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <section className="what-we-do-area three bg-color-two pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="what-we-do-content">
                {/* <span>What We Do</span> */}
                <h2>Why Invest in HKI Animatica</h2>
                <p>A Proven and Scalable Business Model</p>

                <div className="brand-wrap">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/brand/brand1.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/brand/white-brand1.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/brand/brand2.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/brand/white-brand2.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/brand/brand3.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/brand/white-brand3.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="default-btn three">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="row flex-column">
                    <div className="col-12">
                      <div
                        data-aos="fade-up"
                        className="what-we-do-item  border"
                      >
                        <i className="flaticon-film-editing-1 "></i>
                        <h3>Government-sponsored schemes</h3>
                        <p>Tap into state-backed funding opportunities.</p>
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div
                        data-aos="fade-up"
                        className="what-we-do-item border"
                      >
                        <i className="flaticon-film-editing "></i>
                        <h3>AICTE-approved diploma courses</h3>
                        <p>
                          Attract students seeking industry-ready
                          certifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div data-aos="fade-up" className="what-we-do-item border">
                    <i className="flaticon-advertising "></i>
                    <h3>Content monetization</h3>
                    <p>
                      Create and market premium animated content through
                      platforms like YouTube and OTT giants.
                    </p>
                  </div>
                </div>

                {/* <div className="col-lg-6 col-sm-6">
                  <div className="what-we-do-item mt-mince-30">
                    <i className="flaticon-movie"></i>
                    <h3>Conversion</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('/img/banner/banner1.jpg')", // Add a classy background pattern
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="py-5 text-white"
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-4 text-white fw-bold text-uppercase mb-4">
                Our Vision
              </h2>
              <p className="lead" style={{ lineHeight: "1.8" }}>
                Over the next two years, we aim to establish{" "}
                <span className="text-warning">
                  20 HKI Animatica Centers of Excellence
                </span>
                , with 4 already in the pipeline. Each center will serve as a
                hub of <strong>innovation</strong>, <strong>creativity</strong>,
                and <strong>opportunity</strong>, empowering students and
                creators to shape the future of the{" "}
                <span className="text-warning">AVGC-XR sector</span>.
              </p>
              <div className="mt-4">
                <a href="#" className="default-btn">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="col-lg-6 text-center">
              <div
                className="position-relative"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                <Image
                  data-aos="fade-up"
                  src="/img/about-img1.jpg" // Replace with your illustration path
                  alt="Vision Illustration"
                  className="img-fluid w-100 rounded shadow-lg"
                  height={200}
                  width={200}
                />
                {/* <div
                  className="position-absolute mb-2 bottom-0 start-50 translate-middle-x bg-warning text-dark p-3 rounded-pill fw-bold shadow"
                  style={{ width: "80%" }}
                >
                  Centers of Excellence
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
