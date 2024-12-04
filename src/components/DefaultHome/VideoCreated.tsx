"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const VideoCreated: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="video-created-area ptb-100"
        style={{ backgroundImage: `url(/img/video-created-bg.jpg)` }}
      >
        <div className="container">
          <div className="video-created-wrap">
            <Image
              src="/img/video-created-img.jpg"
              alt="Image"
              width={1020}
              height={600}
            />

            <div className="video-wrap">
              <div onClick={() => setToggler(!toggler)} className="play-video">
                <i className="flaticon-play"></i>
              </div>
            </div>

            <h2>Video Created By Vivi</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCreated;
