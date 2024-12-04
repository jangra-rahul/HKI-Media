"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductsCard = () => {
  return (
    <>
      <div className="shop-grid-wrap">
        <div className="row">
          <div className="col-12">
            <div className="woocommerce-topbar">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-7 col-sm-6">
                  <div className="woocommerce-result-count">
                    <p>Showing 9 of 9 results</p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
                <Link href="/shop/details/">Deep Sea</Link>
              </h3>
              <span>$59.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
                <Link href="/shop/details/">The Gdudg</Link>
              </h3>
              <span>$49.2</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
                <Link href="/shop/details/">Summer Love</Link>
              </h3>
              <span>$39.3</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
                <Link href="/shop/details/">Tattoo Life</Link>
              </h3>
              <span>$55.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-shop">
              <div className="shop-img">
                <Image
                  src="/img/products/product5.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-shopping-cart"></i>Add To Cart
                </button>
              </div>
              <h3>
                <Link href="/shop/details/">The Lost world</Link>
              </h3>
              <span>$55.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-shop">
              <div className="shop-img">
                <Image
                  src="/img/products/product6.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-shopping-cart"></i>Add To Cart
                </button>
              </div>
              <h3>
                <Link href="/shop/details/">Dream Girl</Link>
              </h3>
              <span>$55.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-shop">
              <div className="shop-img">
                <Image
                  src="/img/products/product7.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-shopping-cart"></i>Add To Cart
                </button>
              </div>
              <h3>
                <Link href="/shop/details/">Run for your life</Link>
              </h3>
              <span>$59.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-shop">
              <div className="shop-img">
                <Image
                  src="/img/products/product8.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-shopping-cart"></i>Add To Cart
                </button>
              </div>
              <h3>
                <Link href="/shop/details/">Dark House</Link>
              </h3>
              <span>$69.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-shop">
              <div className="shop-img">
                <Image
                  src="/img/products/product9.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />
                <button type="submit" className="default-btn">
                  <i className="flaticon-shopping-cart"></i>Add To Cart
                </button>
              </div>
              <h3>
                <Link href="/shop/details/">Crime Patro</Link>
              </h3>
              <span>$49.1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
