"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./home.css";

const ExclusiveShop: React.FC = () => {
  return (
    <>
      <div
        className="exclusive-shop-area ptb-100"
        style={{ backgroundImage: `url(/img/exclusive-shop-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <h2>The HKI Animatica Franchise Advantage</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="exclusive-img">
                <Image
                  src="/img/exclusive-product-img-1.jpg"
                  alt="Image"
                  width={450}
                  height={450}
                />

                <div className="exclusive-img-2">
                  <Image
                    src="/img/exclusive-product-img-2.png"
                    alt="Image"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="exclusive-video-list">
                <div data-aos="fade-up" className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="">
                      <Link href="/shop/details/">
                        <Image
                          className="custom_w"
                          src="/img/products/product1.jpg"
                          alt="Image"
                          width={255}
                          height={300}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>State-of-the-Art Infrastructure</h3>

                      <ul>
                        <li>
                          Build a cutting-edge animation studio equipped with
                          industry-standard technology.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="">
                      <Link href="/shop/details/">
                        <Image
                          className="custom_w"
                          src="/img/products/product2.jpg"
                          alt="Image"
                          width={285}
                          height={400}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>Tailored Curriculum</h3>

                      <ul>
                        <li>
                          Collaborate with HKI Media to deliver AICTE-approved
                          courses aligned with current market demands.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="">
                      <Link href="/shop/details/">
                        <Image
                          className="custom_w"
                          src="/img/products/product3.jpg"
                          alt="Image"
                          width={285}
                          height={400}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>Proven Content Monetization Strategies</h3>

                      <ul>
                        <li>
                          Utilize HKI’s expertise to turn creative ventures into
                          revenue-generating assets.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="">
                      <Link href="/shop/details/">
                        <Image
                          className="custom_w"
                          src="/img/products/product4.jpg"
                          alt="Image"
                          width={285}
                          height={400}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>Exclusive Access to the Media Matrix App</h3>

                      <ul>
                        <li>
                          Unlock unparalleled networking opportunities and
                          global market reach.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className="row align-items-center mb-0">
                  <div className="col-lg-3">
                    <div className="">
                      <Link href="/shop/details/">
                        <Image
                          className="custom_w"
                          src="/img/products/product4.jpg"
                          alt="Image"
                          width={285}
                          height={400}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>Support and Mentorship</h3>

                      <ul>
                        <li>
                          Benefit from ongoing guidance by HKI Media’s industry
                          veterans.
                        </li>
                      </ul>
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

export default ExclusiveShop;
