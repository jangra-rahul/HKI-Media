"use client";

import React, { useState } from "react";

const ProductQuantity: React.FC = () => {
  const [value, setValue] = useState(1);

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  return (
    <>
      <div className="input-counter">
        <span className="minus-btn" onClick={decreaseValue}>
          <i className="bx bx-minus"></i>
        </span>
        <input type="text" value={value} readOnly />
        <span className="plus-btn" onClick={increaseValue}>
          <i className="bx bx-plus"></i>
        </span>
      </div>
    </>
  );
};

export default ProductQuantity;
