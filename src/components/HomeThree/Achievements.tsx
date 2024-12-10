"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../Entertainment/entertainment.css";

const Achievements: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("tab1");

  const openTabSection = (tabName: string) => {
    const tabcontent = document.getElementsByClassName("tabs-item");
    for (let i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).classList.remove("fadeInUp");
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    const tablinks = document.getElementsByTagName("li");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = "block";
      selectedTab.className += " fadeInUp animated";
    }

    setCurrentTab(tabName);
  };

  return (
    <>
      <div className="  three py-5 jarallax">
        <div className="container">
          <div className="section-title white-title">
            {/* <span>Products</span> */}
            <h2 className="text-black">Achievements</h2>
          </div>

          <div className="tab award-winning-tab">
            <ul className="tabs-nav">
              <li
                className={currentTab === "tab1" ? "current" : ""}
                onClick={() => openTabSection("tab1")}
              >
                <span>Students</span>
              </li>
              <li onClick={() => openTabSection("tab2")}>
                <span>Artists</span>
              </li>
              <li onClick={() => openTabSection("tab3")}>
                <span>Affiliations</span>
              </li>
              <li onClick={() => openTabSection("tab4")}>
                <span>Expansion</span>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Film Festival</span> */}
                      <h2>Over 2,000 Students Trained in 2023-24</h2>
                      <p>
                        We have made a significant impact in empowering the next
                        generation of media professionals through our robust
                        training programs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      <Image
                        src="/img/products-img.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Vivi Bio</span> */}
                      <h2>Skilling & Upskilling 10,200+ Artists</h2>
                      <p>
                        In collaboration with MESC, we are on track to skill and
                        upskill over 10,200 students in film production and
                        animation this year.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img-2.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Vivi Bio</span> */}
                      <h2>National Affiliations</h2>
                      <p>
                        Recognized under Startup India, Skill India, and
                        affiliated with NSDC, MESC, UPSDM, TCIL, and ICASA.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      {/* <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      /> */}
                      <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab4" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products-content">
                      {/* <span>Regional Studio Collaborations</span> */}
                      <h2>Expansion with 20 AVGC-XR CoEs</h2>
                      <p>
                        With 20 planned Centers of Excellence (CoEs) across
                        North India, we are empowering youth with futuristic
                        skills.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products d-flex justify-content-center">
                      <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
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

export default Achievements;
