"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductQuantity from "./ProductQuantity";

const CartTable: React.FC = () => {
  return (
    <>
      <div className="cart-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <form>
                <div className="cart-wraps">
                  <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Image</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/shop/details/">
                              <Image
                                src="/img/products/product1.jpg"
                                alt="Image"
                                width={285}
                                height={400}
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href="/shop/details/">Deep Sea</Link>
                          </td>
                          <td className="product-price">
                            <span className="unit-amount">$59.1</span>
                          </td>
                          <td className="product-quantity">
                            <ProductQuantity />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$59.10</span>
                            <button type="button" className="remove">
                              <i className="bx bx-x"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/shop/details/">
                              <Image
                                src="/img/products/product2.jpg"
                                alt="Image"
                                width={285}
                                height={400}
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href="/shop/details/">The Gdudg</Link>
                          </td>
                          <td className="product-price">
                            <span className="unit-amount">$49.2</span>
                          </td>
                          <td className="product-quantity">
                            <ProductQuantity />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$49.20</span>
                            <button type="button" className="remove">
                              <i className="bx bx-x"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="coupon-cart">
                    <div className="row">
                      <div className="col-lg-8 col-sm-7">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                          />
                          <button className="btn default-btn two">
                            Apply Coupon
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-5 text-right">
                        <div className="update-cart-btn">
                          <button type="button" className="default-btn two">
                            Update Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
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

                <Link href="/checkout" className="default-btn two">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
