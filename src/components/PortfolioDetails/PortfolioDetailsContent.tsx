"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioDetailsContent: React.FC = () => {
  return (
    <>
      <div className="portfolio-details-area ptb-100">
        <div className="container">
          <div className="portfolio-details-wrap">
            <div className="portfolio-img">
              <Image
                src="/img/portfolio-details/portfolio-details-img.jpg"
                alt="Image"
                width={1230}
                height={680}
              />
            </div>

            <div className="portfolio-content">
              <div className="row">
                <div className="col-lg-8">
                  <span>Action</span>
                  <h3>Fighting Club</h3>

                  <div className="portfolio-text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores etea
                      rebum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores etea
                      rebum.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="portfolio-date">
                    <ul className="date-wrap">
                      <li>
                        Director <span>: Mary M. Morgan</span>
                      </li>
                      <li>
                        writer <span>: Clarence Thompson</span>
                      </li>
                      <li>
                        release date <span>: 01-05-2023</span>
                      </li>
                      <li>
                        run time <span>: 2:15</span>
                      </li>
                    </ul>

                    <ul className="social-wrap">
                      <li>
                        <span>Shear</span>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          : <i className="bx bxl-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://instagram.com/" target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://facebook.com/" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-next-and-prev-wrap">
              <div className="row align-items-center">
                <div className="col-6 col-lg-5 col-sm-6">
                  <div className="prev-img">
                    <Link href="#">
                      <Image
                        src="/img/portfolio-details/port-prev-img.jpg"
                        alt="Image"
                        width={180}
                        height={100}
                      />
                      <h3>Prev Post</h3>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-2">
                  <div className="grid">
                    <i className="bx bx-grid-small"></i>
                  </div>
                </div>

                <div className="col-6 col-lg-5 col-sm-6">
                  <div className="next-img">
                    <Link href="#">
                      <Image
                        src="/img/portfolio-details/port-next-img.jpg"
                        alt="Image"
                        width={180}
                        height={100}
                      />
                      <h3>Next Post</h3>
                    </Link>
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

export default PortfolioDetailsContent;
