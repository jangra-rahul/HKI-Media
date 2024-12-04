"use client";

import React, { useState } from "react";
import Image from "next/image";


const ContactWithUs: React.FC = () => {
  return (
    <div className="collaborate-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Collaborate</span>
          <h2>Work With Us</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="collaborate-img">
              <Image
                src="/img/collaborate-img.jpg"
                alt="Image"
                width={535}
                height={694}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="collaborate-form">
              <form>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>Message</label>
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
                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
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

export default ContactWithUs;
