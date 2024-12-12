"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area-two bio-data py-5 ">
        <div className="container ">
          <div className="row align-items-center">
            <h2 className="text-center">Our Services</h2>
            <div className="col-lg-4 col-md-6 mt-4">
              <div data-aos="fade-up" className="card h-100">
                <Image
                  className="w-100"
                  src="/img/about-grid/about-grid1.jpg"
                  alt="Image"
                  width={295}
                  height={246}
                />
                <div className="border border-2  h-100 p-3">
                  <h3 className=" mt-3 mb-0" style={{ color: "#e2a850" }}>
                    Creatives
                  </h3>
                  <p className=" mb-0 pt-2">
                    Innovative and impactful content designed to captivate
                    attention and leave a impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div data-aos="fade-up" className="card h-100">
                <Image
                  className="w-100"
                  src="/img/about-grid/about-grid2.jpg"
                  alt="Image"
                  width={295}
                  height={246}
                />
                <div className="border border-2  h-100 p-3">
                  <h3 className="mt-3 mb-0" style={{ color: "#e2a850" }}>
                    Digital
                  </h3>
                  <p className="mb-0 pt-2">
                    Elevating your online presence with innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div data-aos="fade-up" className="card h-100">
                <Image
                  className="w-100"
                  src="/img/about-grid/about-grid3.jpg"
                  alt="Image"
                  width={295}
                  height={246}
                />
                <div className="border border-2  h-100 p-3">
                  <h3 className="mt-3 mb-0" style={{ color: "#e2a850" }}>
                    Media
                  </h3>
                  <p className="mb-0 pt-2">
                    Empowering your brand with strategic media planning and
                    impactful reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div data-aos="fade-up" className="card h-100">
                <Image
                  className="w-100"
                  src="/img/about-grid/about-grid3.jpg"
                  alt="Image"
                  width={295}
                  height={246}
                />
                <div className="border border-2  h-100 p-3">
                  <h3 className="mt-3 mb-0" style={{ color: "#e2a850" }}>
                    Events
                  </h3>
                  <p className="mb-0 pt-2">
                    Crafting unforgettable events that captivate and connect
                    with your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div data-aos="fade-up" className="card h-100">
                <Image
                  className="w-100"
                  src="/img/about-grid/about-grid3.jpg"
                  alt="Image"
                  width={295}
                  height={246}
                />
                <div className="border border-2  h-100 p-3">
                  <h3 className="mt-3 mb-0" style={{ color: "#e2a850" }}>
                    OOH
                  </h3>
                  <p className="mb-0 pt-2">
                    Innovative outdoor advertising that captures attention and
                    drives impact.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/about-grid/about-grid1.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/about-grid/about-grid2.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img r-sm mb-0">
                    <Image
                      src="/img/about-grid/about-grid3.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img mb-0">
                    <Image
                      src="/img/about-grid/about-grid4.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="ps-4">
                <h2 className="mt-0 mb-0">Our Services</h2>

                <div className="row">
                  <div className="col-6 mt-3">
                    <div className="border border-2  h-100 p-3">
                      <h3 className=" mb-0" style={{ color: "#e2a850" }}>
                        Creatives
                      </h3>
                      <p className=" mb-0 pt-2">
                        Innovative content that captures attention.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="border border-2  h-100 p-3">
                      <h3 className=" mt-3  mb-0" style={{ color: "#e2a850" }}>
                        Digital
                      </h3>
                      <p className=" mb-0  pt-2">
                        Boosting your online presence
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="border border-2  h-100 p-3">
                      <h3 className=" mt-3  mb-0" style={{ color: "#e2a850" }}>
                        Media
                      </h3>
                      <p className=" mb-0 pt-2">
                        Strategic media planning for wider reach.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="border border-2  h-100 p-3">
                      <h3 className=" mt-3  mb-0" style={{ color: "#e2a850" }}>
                        Events
                      </h3>
                      <p className=" mb-0 pt-2">
                        Memorable events to engage your audience.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="border border-2  h-100 p-3">
                      <h3 className=" mt-3  mb-0" style={{ color: "#e2a850" }}>
                        OOH
                      </h3>
                      <p className=" mb-0 pt-2">
                        Creative outdoor advertising solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
