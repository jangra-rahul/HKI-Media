"use client";
  
import React from "react";
import ProductsCard from "./ProductsCard";
import ShopSidebar from "./ShopSidebar";

const ShopContent: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* ProductsCars */}
              <ProductsCard />
            </div>

            <div className="col-lg-4">
              <div className="blog-right-sidebar">
                <ShopSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContent;
