"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Mon-Sat: 8:00am – 8:00pm</p>

              <ul>
                <li>
                  <i className="flaticon-phone-call"></i>
                  Phone:
                  <a href="tel:15877854578">+1 587 785 4578</a>
                </li>
                <li>
                  <i className="flaticon-email-1"></i>
                  Email:
                  <a href="mailto:hello@vivi.com">SUPPORT@HKIMEDIA.COM</a>
                </li>
                <li>
                  <i className="flaticon-pin"></i>
                  Address:
                  <span>
                    GROUND FLOOR , PLOT NO 251 ,<br /> UDYOG VIHAR PHASE 4 ,
                    SECTOR 18 ,<br /> GURUGRAM
                  </span>
                </li>
              </ul>

              <ul className="social-wrap">
                <li className="follow">Follow Us</li>
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

          <div className="col-lg-8 col-md-7">
            <div className="contact-wrap">
              <h3>Write Us</h3>

              <form id="contactForm">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols={30}
                        rows={5}
                        placeholder="Your Message"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="default-btn page-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
