import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area style-two position-relative z-1 overflow-hidden pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-5 pe-xxl-5 mb-30"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="mb-40">
                We Are a cybersecurity-first company, using AI Innovation to
                Help businesses detect threats.
              </p>
              <Link
                href="/about-us"
                className="btn style-two fw-semibold position-relative round-oval"
              >
                Learn More
                <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Image
                    src="/images/icons/right-arrow-white.svg"
                    alt="Icon"
                    width={18}
                    height={16}
                  />
                </span>
              </Link>
            </div>

            <div className="col-lg-4 col-md-7 mb-30">
              <div
                className="about-img round-10"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/images/about/about-img-2.jpg"
                  alt="about"
                  width={570}
                  height={725}
                  className="round-10"
                />
              </div>
            </div>

            <div className="col-lg-5 ps-xxl-5 pe-xxl-4 mb-30">
              <span
                className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                ABOUT US
              </span>
              <h2
                className="section-title style-one font-secondary fw-medium mb-40"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Protecting What Matters Most Through Cutting Edge Intelligence
                And Ethical Cyber
              </h2>
            </div>
          </div>
        </div>

        <div className="move-text style-six overflow-hidden">
          <ul className="list-unstyled mb-0">
            <li className="position-relative font-secondary">
              SMARTER PROTECTION FOR YOUR DATA, NETWORK, AND CLOUD SYSTEMS{" "}
            </li>
            <li className="position-relative font-secondary">
              SMARTER PROTECTION FOR YOUR DATA, NETWORK, AND CLOUD SYSTEMS{" "}
            </li>
            <li className="position-relative font-secondary">
              SMARTER PROTECTION FOR YOUR DATA, NETWORK, AND CLOUD SYSTEMS{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
