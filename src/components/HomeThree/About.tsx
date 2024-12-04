"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area-two three bg-color-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>HKI Media Bio</span>
                <h2>
                  We Are HKI Media: Revolutionizing Creative Video Production
                </h2>
                <p>
                  At HKI Media, we revolutionize video production with
                  cutting-edge technology and bold creativity. From
                  pre-production to post-production, we craft captivating
                  digital content, redefining traditional filmmaking.
                </p>
                <p className="mt-2">
                  Our expertise spans films, music, advertising, and immersive
                  AVGC-XR experiences, pushing creative boundaries to shape the
                  future of storytelling. “We Breed Creative, We Bleed Creative”
                  is not just our tagline—it’s our ethos.
                </p>

                <Link href="/about" className="default-btn three">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
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
                  <div className="about-grid-img m-rs mb-0">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
