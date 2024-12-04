"use client";

import Image from "next/image";
import React from "react";
import whatsapp_logo from "../../../public/img/whatsapp_logo.png";

const Whatsapp = () => {
  return (
    <>
      <div className="whatsapp-top text-white">
        <a
          target="_blanck"
          className="ff-dmsans text-white fs_xsm opacity-07"
          href="https://wa.me/+91 7629387390/?text=Hello%20,%20I%20have%20a%20question"
        >
          <Image src={whatsapp_logo} alt="" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
