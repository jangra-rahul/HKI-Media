"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area-two bg-black  py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" className="about-img">
                {/* <Image
                  src="/img/about-img-two.jpg"
                  alt="Image"
                  width={600}
                  height={400}
                /> */}
                <iframe
                  className="w-100"
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1007558694?h=c791e09829"
                  width="640"
                  height="360"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 data-aos="fade-up" className="text-white">
                  Brand Advertisements
                </h2>
                <p data-aos="fade-up" className="text-white">
                  We craft narratives that connect with audiences on a deeper
                  level, blending creativity with cultural relevance to deliver
                  unforgettable advertising campaigns that leave lasting
                  impressions.
                </p>

                <Link
                  data-aos="fade-up"
                  href="/contact"
                  className="default-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-md-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span>Vivi Bio</span> */}
                <h2 data-aos="fade-up" className="text-white">
                  Government Ads
                </h2>
                <p data-aos="fade-up" className="text-white">
                  With a deep understanding of public initiatives, we design and
                  execute impactful campaigns that foster awareness and drive
                  action on a national scale.
                </p>
                <p data-aos="fade-up" className="text-white">
                  Highlight: Successful campaigns with top-tier clients such as
                  Punjab Kings, AVPL Drones, and government agencies highlight
                  our capability to deliver excellence across sectors.
                </p>

                <Link
                  data-aos="fade-up"
                  href="/contact"
                  className="default-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div data-aos="fade-up" className="about-img">
                <Image
                  src="/img/about-img-three.jpg"
                  alt="Image"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
