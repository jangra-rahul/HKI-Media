"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState(true);
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <Link href="/home-3" className="navbar-brand">
                {/* <Image src="/img/logo.png" alt="logo" width={90} height={33} /> */}
                <h2 className="mb-0">HKI Media</h2>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              <div className="others-option">
                {/* <form className="search-form">
                  <input
                    className="form-control"
                    name="search"
                    placeholder="SEARCH"
                    type="text"
                  />
                  <button className="search-button" type="submit">
                    <i className="bx bx-search"></i>
                  </button>
                </form>

                <div className="cart-icon">
                  <Link href="/cart/">
                    <i className="flaticon-shopping-cart"></i>
                    <span>{5}</span>
                  </Link>
                </div> */}

                <div className="menu-icon">
                  <div
                    className="burger-menu"
                    onClick={handleToggleSidebarModal}
                  >
                    <i className="flaticon-menu-button"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${isActiveSidebarModal ? "" : "active"}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <Link href="/">
                <Image src="/img/logo.png" alt="Image" width={90} height={33} />
              </Link>
            </div>

            <span
              className="close-btn sidebar-modal-close-btn"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </span>
          </div>

          <div className="sidebar-about">
            <div className="title">
              <p>
                Vivi is a high quality video production house. We make a awesome
                branded videos. It is the analogical of film making, but the
                images are digitally recorded instead of film stock.
              </p>
            </div>
          </div>

          <div className="contact-us">
            <h2>Contact Us</h2>

            <ul>
              <li>
                <i className="flaticon-pin"></i>
                GROUND FLOOR , PLOT NO 251 ,<br /> UDYOG VIHAR PHASE 4 , SECTOR
                18 ,<br />
                GURUGRAM
              </li>

              <li>
                <i className="flaticon-email-1"></i>
                <a
                  href="mailto:SUPPORT@HKIMEDIA.COM
"
                >
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

          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>

            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram1.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram2.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram3.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram4.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram5.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/img/instagram/instagram6.jpg"
                    alt="image"
                    width={88}
                    height={88}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-follow-us">
            <h2>Sidebar Follow</h2>

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
      </div>
    </>
  );
};

export default Navbar;
