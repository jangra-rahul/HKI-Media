import Image from "next/image";
import React from "react";
import "./skill.css";

const MapComponent = () => {
  const cities = [
    "Gurugram",
    "Delhi",
    "Jaipur",
    "Lucknow",
    "Sirsa",
    "Chandigarh",
    "Mohali",
    "Ludhiana",
    "Bhopal",
    "Noida",
    "Moradabad",
    "Ghaziabad",
    "Pilibhit",
    "Haridwar",
    "Varanasi",
    "Patna",
    "Ajmer",
    "Alwar",
    "Ahmedabad",
    "Mumbai",
    "Pune",
  ];

  return (
    <div className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="text-center mb-5 text-white">OUR PRESENCE</h2>
        <div className="row">
          {/* Left-hand side Map */}
          <div className="col-lg-6">
            <div className="products card rounded-0 d-flex justify-content-center border-0">
              <Image
                src="/img/Map_img.png" // Update with your map image URL
                alt="Map of India"
                width={600}
                height={490}
              />
            </div>
            {/* <p className="text-center bg-dark p-3 text-white mt-3">
              <strong>States in Red : </strong>
              J&K, Uttarakhand, UP, MP, Bihar, Haryana, Punjab, Rajasthan,
              Gujarat, Maharashtra
            </p> */}
          </div>

          {/* Right-hand side Table */}
          <div className="col-lg-6 mt-4">
            <div className="card rounded-0 bg-dark border-0 p-4">
              <h4 className="text-center mb-4 text-white">Citys</h4>
              <div className="overflow-auto" style={{ height: "450px" }}>
                <table className="table table-dark table-bordered text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map((city, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
