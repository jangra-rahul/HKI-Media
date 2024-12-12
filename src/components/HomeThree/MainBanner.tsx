"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const MaminBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="banner-area jarallax"
        style={{ backgroundImage: `url(/img/banner/banner1.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-video">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-text">
                    <h1>HKI Media</h1>
                    <p className="text-white fw-normal fs-5">
                      Incubating talent, nurturing revolutions - the great
                      Indian digital leap
                    </p>
                    <p className="text-white fs-6">
                      Fasten your seatbelts—{" "}
                      <i>
                        we are here to shake up the industry, ignite
                        imaginations, and create a legacy of unforgettable
                        stories, one creative masterpiece at a time.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-img">
          <Image
            src="/img/banner/banner2.jpg"
            alt="Image"
            width={1290}
            height={870}
          />
        </div>
      </div>
    </>
  );
};

export default MaminBanner;
