"use client";

import React from "react";

const WeProvideServices: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white pt-100 ">
        <div className="container">
          <div className="section-title mb-0">
            {/* <span>Our Production</span> */}
            <h2 className="text-white">Our Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item h-100">
                <i className="flaticon-film-editing-1 text-white"></i>
                <h3 className="text-white">Creatives</h3>
                <p>
                  Crafting innovative and visually engaging content that speaks
                  to your audience
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item h-100">
                <i className="flaticon-film-editing text-white"></i>
                <h3 className="text-white">Digital</h3>
                <p>
                  Leveraging digital channels to boost your online presence and
                  reach targeted audiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item h-100">
                <i className="flaticon-advertising text-white"></i>
                <h3 className="text-white">Media</h3>
                <p>
                  Strategic media planning and buying to ensure maximum exposure
                  across platforms.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item h-100">
                <i className="flaticon-talk-show text-white"></i>
                <h3 className="text-white">Events</h3>
                <p>
                  Organizing and executing impactful events that captivate and
                  engage your target market
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="what-we-do-item h-100">
                <i className="flaticon-cinema text-white"></i>
                <h3 className="text-white">OOH</h3>
                <p>
                  Innovative out-of-home advertising solutions to reach
                  audiences wherever they are.
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
