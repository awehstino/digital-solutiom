import React from "react";
import Image from "next/image";

const Funfact: React.FC = () => {
  return (
    <>
      <div className="counter-area style-one position-relative overflow-hidden bg_secondary z-1 ptb-130">
        <div className="container style-one">
          <div className="row">
            <div className="col-xl-6 col-lg-5 pe-xxl-5 mb-md-30">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-15"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Trusted by these SaaS enabled teams
              </span>
              <h2
                className="section-title style-one fw-medium text-title mb-0"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                The Security Teams At These Industry-leading Companies Can Rest
                Assured, Their Data Is Secure
              </h2>
            </div>

            <div className="col-xl-6 col-lg-7 ps-xxl-5">
              <div className="row gx-md-0 counter-card-wrap style-two position-relative ps-xxl-5">
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="counter-card style-one text-center bg_primary">
                    <span className="counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
                      <Image
                        src="/images/icons/rating-box.svg"
                        alt="Icon"
                        width={34}
                        height={35}
                      />
                    </span>
                    <h4 className="font-secondary text-white">
                      <span className="transition">11.5</span>M+
                    </h4>
                    <p className="fw-medium text-offwhite d-block mb-0">
                      Clients Revenue
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="counter-card style-two text-center">
                    <span className="counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
                      <Image
                        src="/images/icons/doc.svg"
                        alt="Icon"
                        width={27}
                        height={34}
                      />
                    </span>
                    <h4 className="font-secondary">
                      <span className="transition">21.9</span>M+
                    </h4>
                    <p className="fw-semibold text-offwhite d-block mb-0">
                      Project Done
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 sm-none"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <Image
                    src="/images/half-curcle.png"
                    alt="half-circle"
                    width={59}
                    height={59}
                    className="half-circle d-block ms-auto"
                  />
                </div>

                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="counter-card style-four text-center">
                    <span className="counter-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_white">
                      <Image
                        src="/images/icons/speaker.svg"
                        alt="Icon"
                        width={24}
                        height={32}
                      />
                    </span>
                    <h4 className="font-secondary text-white">
                      <span className="transition">21.9</span>M+
                    </h4>
                    <p className="fw-medium text-offwhite fw-medium d-block mb-0">
                      Transactions Recorded
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="move-text-wrapper overflow-hidden">
          <div className="move-text style-three overflow-hidden">
            <ul className="list-unstyled mb-0">
              <li className="position-relative font-secondary">
                AN AI-FIRST PLATFORM BUILT TO AUTOMATE ANALYZE, AND ACCELERATE
                YOUR BUSINESS OPERATIONS
              </li>
              <li className="position-relative font-secondary">
                AN AI-FIRST PLATFORM BUILT TO AUTOMATE ANALYZE, AND ACCELERATE
                YOUR BUSINESS OPERATIONS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfact;
