"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-area  py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info ">
              <h3 className="">Get In Touch</h3>

              <ul className="mt-4">
                <li className="">
                  <i className="flaticon-phone-call "></i>
                  Phone:
                  <a href="tel:15877854578" className="">
                    +1 587 785 4578
                  </a>
                </li>
                <li className="">
                  <i className="flaticon-email-1 "></i>
                  Email:
                  <a href="mailto:Support@hkimedia.com" className="">
                    Support@hkimedia.com
                  </a>
                </li>
                <li className="">
                  <i className="flaticon-pin "></i>
                  Address:
                  <span className="">
                    Ground Floor, Plot No 251, <br></br>Udyog Vihar Phase 4,
                    Sector 18,<br></br>
                    Gurugram
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="contact-wrap">
              <h3 className=" m-0">Franchise Inquiry Form</h3>
              <p className=" mt-2">
                Ready to Transform the Industry? Let’s Talk! Fill out the form
                below to inquire about owning an HKI Animatica franchise.
              </p>

              <form id="ContactForm">
                <div className="row align-items-center">
                  <div className="col-lg-6 mt-4  col-md-6">
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
                  <div className="col-lg-6 mt-4  col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4  col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4  col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        placeholder="City/Location"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 ">
                    <div className="form-group">
                      <select
                        name="background"
                        className="form-control"
                        required
                      >
                        <option value="" disabled selected>
                          Your Background (Entrepreneur, Investor, Educator,
                          etc.)
                        </option>
                        <option value="entrepreneur">Entrepreneur</option>
                        <option value="investor">Investor</option>
                        <option value="educator">Educator</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="whyHki"
                        cols={30}
                        rows={5}
                        placeholder="Why HKI Animatica?"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 col-sm-12">
                    <button type="submit" className="default-btn page-btn">
                      Submit Inquiry
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
