"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AwardWinningMovies: React.FC = () => {
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
      <div className="products-area three ptb-100 jarallax">
        <div className="container">
          <div className="section-title white-title">
            <span>Products</span>
            <h2>Award Winning Movies</h2>
          </div>

          <div className="tab award-winning-tab">
            <ul className="tabs-nav">
              <li
                className={currentTab === "tab1" ? "current" : ""}
                onClick={() => openTabSection("tab1")}
              >
                <span>2000</span>
              </li>
              <li onClick={() => openTabSection("tab2")}>
                <span>2001</span>
              </li>
              <li onClick={() => openTabSection("tab3")}>
                <span>2002</span>
              </li>
              <li onClick={() => openTabSection("tab4")}>
                <span>2003</span>
              </li>
              <li onClick={() => openTabSection("tab5")}>
                <span>2004</span>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Film Festival</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="#" className="default-btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row align-items-center">
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

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Vivi Bio</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="#" className="default-btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Vivi Bio</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="#" className="default-btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab4" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img-4.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Vivi Bio</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="#" className="default-btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab5" className="tabs-item">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products">
                      <Image
                        src="/img/products-img-3.jpg"
                        alt="Image"
                        width={600}
                        height={490}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products-content">
                      <span>Vivi Bio</span>
                      <h2>Award Winning Movies “Once Upon a Time”</h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production and post-production the images are.
                      </p>

                      <Link href="#" className="default-btn">
                        Learn More
                      </Link>
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

export default AwardWinningMovies;
