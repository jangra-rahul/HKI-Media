"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area ">
        <div className="container py-5 ">
          <div
            className="about-content-wrap pt-5"
            style={{
              backgroundImage: `url(/img/ab_img.JPG)`,
              backgroundPosition: "100%",
              backgroundRepeat: "no-repeat",
              height: "522px",
              backgroundSize: "750px",
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="about-content mb-0 pb-0">
                  {/* <span>Vivi Bio</span> */}
                  <h2 className="">Product Shoots</h2>
                  <p className="">
                    Through our high-quality product shoots, we capture the
                    essence of every brand, presenting its features with
                    stunning visuals designed to persuade and captivate
                    audiences.
                  </p>

                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about-img">
                  <Image
                    src="/img/ab_img.JPG"
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
