import React from "react";
import "./media.css";
import Image from "next/image";

const MediaMatrixHero = () => {
  return (
    <div className="bg-black py-5">
      <div className="py-5 container">
        <section className="media-matrix-section">
          <div className="row align-items-center">
            {/* Left Text Section */}
            <div className="col-lg-6 col-md-12 text-box">
              <h2 className="section-title text-start text-white">
                MEDIA MATRIX APP - INTEGRATING THE INDIAN MEDIA & ENTERTAINMENT
                INDUSTRY
              </h2>
              <p className="section-description text-start text-white">
                Introducing the Media Matrix App—a revolutionary platform
                transforming the media and entertainment landscape. By enabling
                seamless, rating-based hiring and real-time casting of artists,
                it bridges the gap between talent and opportunity like never
                before.
              </p>
              <p className="section-description text-start text-white">
                The app fosters faster collaboration among creative agencies,
                streamlining projects from ideation to execution. It also offers
                a dedicated module for celebrity hiring for events and
                endorsements, simplifying high-impact campaigns.
              </p>
              <p className="section-description text-start text-white">
                With features that aggregate media services, enhance
                transparency, and promote inclusivity, the Media Matrix App is
                set to redefine how the industry connects, collaborates, and
                creates. It’s not just a platform—it’s the future of media
                synergy.
              </p>
            </div>

            {/* Right Screenshot Section */}
            <div className="col-lg-6 col-md-12 screenshot-box">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="/img/ab_img.JPG"
                    alt="Screenshot 1"
                    className="img-fluid mb-4"
                    height={100}
                    width={300}
                  />
                </div>
                <div className="col-6">
                  <Image
                    src="/img/ab_img.JPG"
                    alt="Screenshot 1"
                    className="img-fluid mb-4"
                    height={100}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaMatrixHero;
