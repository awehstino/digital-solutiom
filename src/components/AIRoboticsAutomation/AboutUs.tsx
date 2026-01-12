import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area style-three bg-black position-relative overflow-hidden z-1 ptb-130">
        <Image
          src="/images/about/about-shape-1.png"
          alt="Shape"
          width={276}
          height={404}
          className="section-shape-one position-absolute top-0 end-0 z-n1"
        />
        <Image
          src="/images/about/about-shape-2.png"
          alt="Shape"
          width={267}
          height={514}
          className="section-shape-one position-absolute bottom-0 start-0 z-n1"
        />

        <div className="container style-one position-relative">
          <Image
            src="/images/about/about-thumb-2.png"
            alt="about"
            width={175}
            height={209}
            className="about-thumb round-10"
          />
          <span className="d-block fs-14 fw-bold ls-15 text_secondary mb-12">
            ABOUT US
          </span>

          <h2 className="section-title style-four fw-medium text-white pe-xxl-4">
            Empowering Businesses With{" "}
            <span className="thumb round-oval">
              <Image
                src="/images/about/about-thumb-4.jpg"
                alt="about"
                width={207}
                height={71}
                className="round-oval"
              />
            </span>{" "}
            Intelligent Automation Solutions Seamlessly{" "}
            <span className="blur-text">
              Operations - Aivox Integrate Into Existing AI Is Dedicated
            </span>
          </h2>

          <div className="circle-text-wrap position-relative z-1 rounded-circle d-flex flex-column align-items-center justify-content-center ms-auto">
            <span className="exp-years font-secondary text-white fw-bold d-block">
              25
            </span>
            <Image
              src="/images/about/experience-text.png"
              alt="experience"
              width={242}
              height={242}
              className="circle-text d-block mx-auto rotate"
            />
          </div>
        </div>

        <Image
          src="/images/about/about-img-3.png"
          alt="about"
          width={630}
          height={583}
          className="about-img position-absolute bottom-0 z-1"
        />
      </div>
    </>
  );
};

export default AboutUs;
