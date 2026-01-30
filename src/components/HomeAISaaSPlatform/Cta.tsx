import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <>
      <div className="cta-area style-one bg_primary position-relative z-1 overflow-hidden ptb-130">
        <Image
          src="/images/cta-shape-1.png"
          alt="Shape"
          width={493}
          height={676}
          className="cta-section-shape position-absolute top-0 h-100 z-n1"
        />

        <div className="container style-one">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-xxl-4 mb-md-30">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_secondary text-black round-oval mb-15"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                INNOVATE OR GET LEFT BEHIND.
              </span>
              <h2
                className="section-title style-one text-white fw-medium mb-0"
                data-delay="200"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Start automating, scaling, and outperforming the competition today.
              </h2>
            </div>

            <div className="col-lg-6 pe-xxl-1">
              <div className="cta-img-wrap d-flex flex-wrap align-items-center justify-content-between">
                <div
                  className="cta-img"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <Image
                    src="/images/cta-img-1.png"
                    alt="cta"
                    width={380}
                    height={357}
                    className="d-block me-auto"
                  />
                </div>

                <div
                  className="circle-text-wrap rounded-circle position-relative"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <span className="bg_secondary position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                    <Image
                      src="/images/icons/up-right-arrow.svg"
                      alt="Icon"
                      width={19}
                      height={19}
                      className="transition"
                    />
                  </span>
                  <Image
                    src="/images/req-demo-white.svg"
                    alt="req-demo"
                    width={227}
                    height={230}
                    className="circle-text d-block mx-auto rotate"
                  />

                  <Link
                    href="/contact"
                    className="position-absolute top-0 start-0 w-100 h-100 z-1"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
