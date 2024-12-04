"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExclusiveShop: React.FC = () => {
  return (
    <>
      <div className="shop-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Exclusive shop</span>
            <h2>Collect Your Movies Now!</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-shop">
                <div className="shop-img">
                  <Image
                    src="/img/products/product1.jpg"
                    alt="Image"
                    width={285}
                    height={400}
                  />
                  <button type="submit" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>Add To Cart
                  </button>
                </div>
                <h3>
                  <Link href="/shop/details/">
                    Deep Sea
                  </Link>
                </h3>
                <span>$59.00</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-shop">
                <div className="shop-img">
                  <Image
                    src="/img/products/product2.jpg"
                    alt="Image"
                    width={285}
                    height={400}
                  />
                  <button type="submit" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>Add To Cart
                  </button>
                </div>
                <h3>
                  <Link href="/shop/details/">
                    The Gdudg
                  </Link>
                </h3>
                <span>$59.00</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-shop">
                <div className="shop-img">
                  <Image
                    src="/img/products/product3.jpg"
                    alt="Image"
                    width={285}
                    height={400}
                  />
                  <button type="submit" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>Add To Cart
                  </button>
                </div>
                <h3>
                  <Link href="/shop/details/">
                    Summer Love
                  </Link>
                </h3>
                <span>$59.00</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-shop">
                <div className="shop-img">
                  <Image
                    src="/img/products/product4.jpg"
                    alt="Image"
                    width={285}
                    height={400}
                  />
                  <button type="submit" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>Add To Cart
                  </button>
                </div>
                <h3>
                  <Link href="/shop/details/">
                    Tattoo Life
                  </Link>
                </h3>
                <span>$59.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveShop;
