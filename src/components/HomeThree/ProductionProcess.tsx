// "use client";

// import React from "react";

// const ProductionProcess: React.FC = () => {
//   return (
//     <>
//       <section className="production-process-area bg-color-two pt-100 pb-130">
//         <div className="container">
//           <div className="section-title white-title">
//             <h2>Our Video Production Process</h2>
//           </div>

//           <div className="row">
//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process one">
//                 <i className="flaticon-help"></i>
//                 <p className="one">Technical Support</p>
//               </div>
//             </div>

//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process two">
//                 <i className="flaticon-research"></i>
//                 <p className="two">Project Research</p>
//               </div>
//             </div>

//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process three">
//                 <i className="flaticon-script"></i>
//                 <p className="three">Script & Creative</p>
//               </div>
//             </div>

//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process four">
//                 <p className="four">Editing & Post-production</p>
//                 <i className="flaticon-video"></i>
//               </div>
//             </div>

//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process five">
//                 <p className="five">Voice-over</p>
//                 <i className="flaticon-dubbing"></i>
//               </div>
//             </div>

//             <div className="col-lg-4 col-sm-6 p-relative">
//               <div className="single-process six">
//                 <p className="six">Style Frames</p>
//                 <i className="flaticon-mirror"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductionProcess;

"use client";

import React from "react";
import "./three.css";

const ProductionProcess: React.FC = () => {
  return (
    <>
      <section className="production-process-area bg-color-two pt-100 pb-130">
        <div className="container">
          <div className="section-title white-title text-center">
            <h2>Our Video Production Process</h2>
          </div>

          <div className="timeline d-md-block d-none">
            {/* Step 1 */}

            {/* Step 2 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="d-flex justify-content-end">
                  <div className="icon-container">
                    <i className="flaticon-research"></i>
                  </div>
                </div>
                <h4>Project Research</h4>
                <p>Diving deep to understand your goals and requirements.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="icon-container">
                  <i className="flaticon-script"></i>
                </div>
                <h4>Script & Creative</h4>
                <p>Crafting scripts and designing creative elements.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="d-flex justify-content-end">
                  <div className="icon-container">
                    <i className="flaticon-video"></i>
                  </div>
                </div>
                <h4>Editing & Post-production</h4>
                <p>Polishing content to perfection with editing and effects.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="icon-container">
                  <i className="flaticon-dubbing"></i>
                </div>
                <h4>Voice-over</h4>
                <p>Adding impactful voiceovers to enhance the message.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="d-flex justify-content-end">
                  <div className="icon-container">
                    <i className="flaticon-mirror"></i>
                  </div>
                </div>
                <h4>Style Frames</h4>
                <p>Creating visual references for final production.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="icon-container ">
                  <i className="flaticon-help"></i>
                </div>

                <h4>Technical Support</h4>
                <p>Ensuring all systems and tools are set for production.</p>
              </div>
            </div>
          </div>
          <div className="d-md-none d-flex">
            <div className="row">
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container">
                    <i className="flaticon-research"></i>
                  </div>

                  <h4>Project Research</h4>
                  <p>Diving deep to understand your goals and requirements.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container">
                    <i className="flaticon-script"></i>
                  </div>
                  <h4>Script & Creative</h4>
                  <p>Crafting scripts and designing creative elements.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container">
                    <i className="flaticon-video"></i>
                  </div>

                  <h4>Editing & Post-production</h4>
                  <p>
                    Polishing content to perfection with editing and effects.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container">
                    <i className="flaticon-dubbing"></i>
                  </div>
                  <h4>Voice-over</h4>
                  <p>Adding impactful voiceovers to enhance the message.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container">
                    <i className="flaticon-mirror"></i>
                  </div>
                  <h4>Style Frames</h4>
                  <p>Creating visual references for final production.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 ">
                <div className="card p-4">
                  <div className="icon-container ">
                    <i className="flaticon-help"></i>
                  </div>

                  <h4>Technical Support</h4>
                  <p>Ensuring all systems and tools are set for production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionProcess;
