"use client";

import React, { useState } from "react";
import Link from "next/link";

const ProductsDetailsTab: React.FC = () => {
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
      <div className="col-lg-12 col-md-12">
        <div className="products-details-tab">
          <div className="tab">
            <ul className="tabs-nav">
              <li
                className={currentTab === "tab1" ? "current" : ""}
                onClick={() => openTabSection("tab1")}
              >
                Description
              </li>
              <li onClick={() => openTabSection("tab2")}>
                Additional information
              </li>
              <li onClick={() => openTabSection("tab3")}>Reviews</li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="products-details-tab-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="products-details-tab-content">
                  <ul className="additional-information">
                    <li>
                      <span>Brand:</span> ThemeForest
                    </li>
                    <li>
                      <span>Color:</span> Blue
                    </li>
                    <li>
                      <span>Size:</span> Large, Medium
                    </li>
                    <li>
                      <span>Weight:</span> 28 kg
                    </li>
                    <li>
                      <span>Dimensions:</span> 22 x 123 cm
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tab3" className="tabs-item">
                <div className="products-details-tab-content">
                  <div className="product-review-form">
                    <h3>Customer Reviews</h3>

                    <div className="review-title">
                      <div className="rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <p>Based on 2 reviews</p>
                    </div>

                    <div className="review-comments">
                      <div className="review-item">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                        <h3>Good</h3>
                        <span>
                          <strong>Admin</strong> on{" "}
                          <strong>Sep 21, 2019</strong>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>

                        <Link href="#" className="review-report-link">
                          Reply
                        </Link>
                      </div>

                      <div className="review-item">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                        <h3>Good</h3>
                        <span>
                          <strong>Admin</strong> on{" "}
                          <strong>Sep 21, 2019</strong>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>

                        <Link href="#" className="review-report-link">
                          Reply
                        </Link>
                      </div>
                    </div>

                    <div className="review-form">
                      <h3>Write a Review</h3>

                      <form>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Review Title</label>
                              <input
                                type="text"
                                id="review-title"
                                name="review-title"
                                placeholder="Enter your review a title"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Body of Review (2000)</label>
                              <textarea
                                name="review-body"
                                id="review-body"
                                cols={30}
                                rows={8}
                                placeholder="Write your comments here"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <button
                              type="submit"
                              className="btn default-btn two"
                            >
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </form>
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

export default ProductsDetailsTab;
