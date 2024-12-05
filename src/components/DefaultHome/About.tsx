"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area  ptb-100">
        <div className="container pt-5">
          <div
            className="about-content-wrap"
            style={{ backgroundImage: `url(/img/about-img1.jpg)` }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="about-content">
                  {/* <span>Vivi Bio</span> */}
                  <h2>Brand Advertisements</h2>
                  <p>
                    We craft narratives that connect with audiences on a deeper
                    level, blending creativity with cultural relevance to
                    deliver unforgettable advertising campaigns that leave
                    lasting impressions.
                  </p>

                  <Link href="/about" className="default-btn">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about-img">
                  <Image
                    src="/img/about-img1.jpg"
                    alt="Image"
                    width={810}
                    height={522}
                  />
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
