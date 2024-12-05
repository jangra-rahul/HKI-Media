import Image from "next/image";
import React from "react";

const AdvertisementsHero = () => {
  return (
    <div className="pt-5 bg-black">
      <div className="pt-5 mt-3 container">
        <div className="row">
          <div className="col-4">
            <div className="border shadow-xl rounded-4">
              <div className="shadow-sm text-white border-0 rounded">
                <Image
                  src="/img/latest-trailer/image1.png"
                  alt="Image"
                  width={245}
                  height={200}
                  className="w-100 rounded-top-4 "
                />
                <div className="p-3">
                  <h3 className="font-weight-bold text-white">
                    Brand Advertisements s
                  </h3>
                  <p>
                    We craft narratives that connect with audiences on a deeper
                    level, blending creativity with cultural relevance to
                    deliver unforgettable advertising campaigns that leave
                    lasting impressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="border shadow-xl rounded-4">
              <div className="shadow-sm text-white border-0 rounded">
                <Image
                  src="/img/latest-trailer/image1.png"
                  alt="Image"
                  width={245}
                  height={200}
                  className="w-100 rounded-top-4 "
                />
                <div className="p-3">
                  <h3 className="font-weight-bold text-white">
                    Product Shoots
                  </h3>
                  <p>
                    Through our high-quality product shoots, we capture the
                    essence of every brand, presenting its features with
                    stunning visuals designed to persuade and captivate
                    audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="border shadow-xl rounded-4">
              <div className="shadow-sm text-white border-0 rounded">
                <Image
                  src="/img/latest-trailer/image1.png"
                  alt="Image"
                  width={245}
                  height={200}
                  className="w-100 rounded-top-4 "
                />
                <div className="p-3">
                  <h3 className="font-weight-bold text-white">
                    Government Ads
                  </h3>
                  <p>
                    We craft narratives that connect with audiences on a deeper
                    level, blending creativity with cultural relevance to
                    deliver unforgettable advertising campaigns that leave
                    lasting impressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementsHero;
