"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const RelatedProducts: React.FC = () => {
  return (
    <>
      <div className="pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Related Products</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              414: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="related-products"
          >
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
