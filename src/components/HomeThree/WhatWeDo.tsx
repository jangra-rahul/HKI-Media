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
                      <div className="what-we-do-item  border">
                        <i className="flaticon-film-editing-1 "></i>
                        <h3>Government-sponsored schemes</h3>
                        <p>Tap into state-backed funding opportunities.</p>
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="what-we-do-item border">
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
                  <div className="what-we-do-item border">
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
    </>
  );
};

export default WhatWeDo;
