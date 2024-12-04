"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className="footer-top-area pt-100 pb-70"
        style={{ backgroundImage: `url(/img/footer-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/img/white-logo.png"
                      alt="Image"
                      width={90}
                      height={33}
                    />
                  </Link>
                </div>

                <div className="newsletter-wrap">
                  <h3>Subscribe Newsletter</h3>
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      name="email"
                      required
                    />

                    <button className="send-btn" type="submit">
                      <i className="bx bx-right-arrow-alt"></i>
                    </button>
                  </form>
                </div>

                <ul className="social-wrap">
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
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Contact Us</h3>

                <ul className="address">
                  <li>
                    <i className="flaticon-pin"></i>
                    GROUND FLOOR , PLOT NO 251 , UDYOG VIHAR PHASE 4 , SECTOR 18
                    , GURUGRAM
                  </li>
                  <li>
                    <i className="flaticon-email-1"></i>
                    <a href="mailto:SUPPORT@HKIMEDIA.COM">
                      SUPPORT@HKIMEDIA.COM
                    </a>

                    {/* <a href="#">Skype: example</a> */}
                  </li>
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <a href="tel:+1-587-785-4578">+1 587 785 4578</a>
                    <a href="tel:+1-485-456-0102">+1 485 456 0102</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Additional Links</h3>

                <ul className="additional-link">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Latest Videos</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/faq">Help (FAQ)</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/privacypolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Instagram</h3>

                <ul className="instagram">
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram1.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram2.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram3.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram4.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram5.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/img/instagram/instagram6.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="copyright-wrap">
            <p>
              Copyright @{currentYear} Vivi. Designed By{" "}
              <a href="https://envytheme.com/" target="blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
