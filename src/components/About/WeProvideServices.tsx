"use client";

import React from "react";

const WeProvideServices: React.FC = () => {
  return (
    <>
      <div className="our-production-area bg-black py-5">
        <div className="container mt-5">
          <div className="section-title mb-0">
            {/* <span>Our Production</span> */}
            <h2 className="text-white mb-0">Our Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-film-editing-1 text-white"></i>
                <h4 className="text-white">Regional Celebrity Animation</h4>
                <p className="text-white">
                  Transform fan-favorites like Sapna Choudhary and Pawan Singh
                  into animated stars.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-film-editing text-white"></i>
                <h4 className="text-white">
                  Educational & Infotainment Videos
                </h4>
                <p className="text-white">
                  Multilingual, market-ready content for regional and global
                  audiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-advertising text-white"></i>
                <h4 className="text-white">
                  Period Dramas & Religious Stories
                </h4>
                <p className="text-white">
                  Bring legends like Veer Teja Ji and mythological tales like
                  Shiv Puran to life.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-talk-show text-white"></i>
                <h4 className="text-white">Localized Kids Heroes</h4>
                <p className="text-white">
                  Develop cultural icons in regional languages inspired by hits
                  like Chhota Bheem.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-cinema text-white"></i>
                <h4 className="text-white">High RPM Content</h4>
                <p className="text-white">
                  Target lucrative international markets, including the USA and
                  Western Europe.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item border h-100">
                <i className="flaticon-music text-white"></i>
                <h4 className="text-white">
                  Development of Gaming & Comic IPs
                </h4>
                <p className="text-white">
                  Developing immersive gaming experiences and original comic
                  IPs, we are at the forefront of entertainment innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeProvideServices;
