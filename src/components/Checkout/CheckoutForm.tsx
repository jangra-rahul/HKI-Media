"use client";

import React from "react"; 

const CheckoutForm: React.FC = () => {
  return (
    <>
      <div className="checkout-area ptb-100">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Billing Details</h3>

                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Country <span className="required">*</span>
                        </label>

                        <div className="select-box">
                          <select className="select-form">
                            <option value="5">United Kingdom</option>
                            <option value="1">China</option>
                            <option value="2">United Arab Emirates</option>
                            <option value="0">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-different-address"
                        />
                        <label className="form-check-label">
                          Ship to a different address?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Order notes (Optional)</label>
                        <textarea
                          name="notes"
                          id="notes"
                          cols={30}
                          rows={8}
                          placeholder="Order Notes"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="order-details">
                  <div className="cart-totals">
                    <h3>Checkout Summary</h3>
                    <ul>
                      <li>
                        Subtotal <span>$255.90</span>
                      </li>
                      <li>
                        Shipping <span>$10.00</span>
                      </li>
                      <li>
                        Coupon <span>$0.00</span>
                      </li>
                      <li>
                        Total <span>$255.90</span>
                      </li>
                      <li>
                        <b>Payable Total</b>{" "}
                        <span>
                          <b>$255.90</b>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button className="default-btn two" type="button">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
