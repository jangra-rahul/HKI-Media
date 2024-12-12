"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AnimaticaBio: React.FC = () => {
  return (
    <>
      <div className="about-area bg-black pt-5">
        <div className="container pt-5 mt-md-5">
          <div
            className="about-content-wrap"
            style={{
              backgroundImage: `url(/img/about-img1.jpg)`,
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="about-content mb-0 pb-0 mt-3">
                  {/* <span>Vivi Bio</span> */}
                  <h2 data-aos="fade-up" className="text-white">
                    HKI Animatica, an innovative initiative by HKI Media
                  </h2>
                  <p data-aos="fade-up" className="text-white">
                    Setting new benchmarks in the Animation, Visual Effects,
                    Gaming, Comics, and Extended Reality (AVGC-XR) industry.
                    Designed as a franchise-ready model, HKI Animatica combines
                    cutting-edge animation production with a robust education
                    ecosystem, delivering high-quality content while bridging
                    talent gaps in the industry. As India gears towards becoming
                    a global AVGC-XR leader, HKI Animatica offers you a chance
                    to join this revolution by owning a piece of the future.
                  </p>

                  <Link
                    data-aos="fade-up"
                    href="/contact"
                    className="default-btn mt-3"
                  >
                    Contact Us
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

export default AnimaticaBio;
