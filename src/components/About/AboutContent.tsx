"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area-two bio-data bg-black pt-5 ">
        <div className="container pt-5 ">
          <div className="row align-items-center">
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
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span>vivi Bio</span> */}
                <h2 className="text-white">Our Services</h2>

                <h3 className="text-white mb-0">Creatives</h3>
                <p className="text-white mb-0">
                  Innovative content that captures attention.
                </p>

                <h3 className=" mt-3 text-white mb-0">Digital</h3>
                <p className="text-white mb-0 ">
                  Boosting your online presence
                </p>
                <h3 className=" mt-3 text-white mb-0">Media</h3>
                <p className="text-white mb-0">
                  Strategic media planning for wider reach.
                </p>
                <h3 className=" mt-3 text-white mb-0">Events</h3>
                <p className="text-white mb-0">
                  Memorable events to engage your audience.
                </p>
                <h3 className=" mt-3 text-white mb-0">OOH</h3>
                <p className="text-white mb-0">
                  Creative outdoor advertising solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
