"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExclusiveShop: React.FC = () => {
  return (
    <>
      <div
        className="exclusive-shop-area ptb-100"
        style={{ backgroundImage: `url(/img/exclusive-shop-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span>Exclusive shop</span>
            <h2>Collect Your Movies Now!</h2>
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
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="exclusive-list-img">
                      <Link href="/shop/details/">
                        <Image
                          src="/img/products/product1.jpg"
                          alt="Image"
                          width={285}
                          height={400}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>
                        <Link href="/shop/details/">Deep Sea</Link>
                      </h3>
                      <span>
                        <del>$59.1</del> $57.1
                      </span>
                      <ul>
                        <li>Director: Peter Spider</li>
                        <li>Release: 01-01-2018</li>
                      </ul>
                      <button type="submit" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>Add To Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="exclusive-list-img">
                      <Link href="/shop/details/">
                        <Image
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
                      <h3>
                        <Link href="/shop/details/">
                          The Gdudg
                        </Link>
                      </h3>
                      <span>
                        <del>$49.2</del> $47.2
                      </span>
                      <ul>
                        <li>Director: Peter Spider</li>
                        <li>Release: 01-01-2018</li>
                      </ul>
                      <button type="submit" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>Add To Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="exclusive-list-img">
                      <Link href="/shop/details/">
                        <Image
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
                      <h3>
                        <Link href="/shop/details/">
                          Summer Love
                        </Link>
                      </h3>
                      <span>
                        <del>$39.3</del> $37.3
                      </span>
                      <ul>
                        <li>Director: Peter Spider</li>
                        <li>Release: 01-01-2018</li>
                      </ul>
                      <button type="submit" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>Add To Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="exclusive-list-img">
                      <Link href="/shop/details/">
                        <Image
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
                      <h3>
                        <Link href="/shop/details/">
                          Tattoo Life
                        </Link>
                      </h3>
                      <span>
                        <del>$55.1</del> $53.1
                      </span>
                      <ul>
                        <li>Director: Peter Spider</li>
                        <li>Release: 01-01-2018</li>
                      </ul>
                      <button type="submit" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>Add To Cart
                      </button>
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
