import React from "react";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area style-four overflow-hidden ptb-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <div className="about-img-wrap position-relative mb-md-30">
                <Image
                  src="/images/about/about-img-1.png"
                  alt="about"
                  width={350}
                  height={352}
                  className="about-img position-absolute rotate"
                />
                <Image
                  src="/images/about/about-shape-3.png"
                  alt="Shape"
                  width={346}
                  height={553}
                  className="about-img-shape mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 ps-xl-4 pe-xxl-5">
              <div className="about-content position-relative">
                <div className="about-promo-text style-one move-right sm-none">
                  <Image
                    src="/images/about/thumbnail-2.png"
                    alt="thumbnail"
                    width={21}
                    height={21}
                  />
                  Write a blog post{" "}
                </div>

                <div className="about-promo-text style-two move-left sm-none">
                  <Image
                    src="/images/about/thumbnail-3.png"
                    alt="thumbnail"
                    width={17}
                    height={17}
                  />
                  Checklist task
                </div>

                <span className="section-subtitle style-two d-inline-block text_primary fw-bold fs-14 ls-15 mb-12">
                  About Us
                </span>

                <h2 className="section-title style-four font-secondary fw-medium text-title">
                  Driven By Innovation, Powered By Intelligence — Discover How
                  Digital Solution Is Transforming{" "}
                  <span className="blur-text">The Future Of Business</span>
                  <span className="thumb">
                    <Image
                      src="/images/about/thumbnail.png"
                      alt="thumbnail"
                      width={38}
                      height={52}
                    />
                  </span>
                  <span className="blur-text d-block">
                    Through Smarter, Scalable, And Secure Artificial
                    Intelligence Solutions For Every Industry.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
