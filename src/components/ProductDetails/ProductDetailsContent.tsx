"use client";

import React from "react";
import Image from "next/image";
import ProductQuantities from "./ProductQuantities";

const ProductDetailsContent: React.FC = () => {
  return (
    <>
      <div className="col-lg-3 offset-lg-2 col-md-6">
        <div className="product-details-image">
          <Image
            src="/img/products/product1.jpg"
            alt="Image"
            width={285}
            height={400}
          />
        </div>
      </div>

      <div className="col-lg-6 col-md-6">
        <div className="product-details-desc">
          <h3>Deep Sea</h3>

          <div className="price">
            <span className="new-price">$59.1</span>
          </div>

          <div className="product-review">
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <a
              className="rating-count"
              href="/product/5f05ab914875b805d9f87b09/#"
            >
              5 reviews
            </a>
          </div>

          <ul className="product-summery">
            <li>
              SUK: <span>13246</span>
            </li>
            <li>
              Category: <span>Horror</span>
            </li>
            <li>
              Tags: <span>Awards, Festival, Movie</span>
            </li>
            <li>15 in stock</li>
          </ul>

          <ul className="social-wrap">
            <li>
              <span>Share:</span>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
          </ul>

          <div className="row">
            <div className="col-sm-6">
              <ProductQuantities />
            </div>

            <div className="col-sm-6">
              <button type="submit" className="default-btn two">
                <i className="flaticon-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContent;
