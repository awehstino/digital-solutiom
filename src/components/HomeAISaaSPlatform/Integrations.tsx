import React from "react";
import Image from "next/image";

const Integrations: React.FC = () => {
  // Dynamic data for left integrations
  const leftIntegrations = [
    {
      id: 1,
      src: "/images/about/ms.png",
      alt: "Microsoft",
      delay: 100,
    },
    {
      id: 2,
      src: "/images/about/drive.png",
      alt: "Drive",
      delay: 200,
    },
    {
      id: 3,
      src: "/images/about/slack.png",
      alt: "Slack",
      delay: 300,
    },
    {
      id: 4,
      src: "/images/about/discord.png",
      alt: "Discord",
      delay: 400,
    },
  ];

  // Dynamic data for right integrations
  const rightIntegrations = [
    {
      id: 5,
      src: "/images/about/git.png",
      alt: "Git",
      delay: 500,
    },
    {
      id: 6,
      src: "/images/about/teams.png",
      alt: "Teams",
      delay: 600,
    },
    {
      id: 7,
      src: "/images/about/chatgpt.png",
      alt: "ChatGPT",
      delay: 700,
    },
    {
      id: 8,
      src: "/images/about/onedrive.png",
      alt: "OneDrive",
      delay: 800,
    },
  ];

  return (
    <>
      <div className="integration-area style-one position-relative overflow-hidden z-1">
        <div className="container style-one pb-130">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10 text-center position-relative">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-18"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Integrations
              </span>
              <h2
                className="section-title style-one fw-medium text-center text-title mb-50 px-xxl-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                A Data Security Solution That Works For Your Ecosystem
              </h2>
            </div>
          </div>

          <div className="integration-wrapper style-one position-relative z-1">
            <Image
              src="/images/about/integration-line.png"
              alt="Shape"
              width={1296}
              height={350}
              className="intg-line position-absolute z-n1 sm-none"
            />
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-5 pe-xxl-0">
                <div className="int-box-wrapper style-one">
                  {leftIntegrations.map((integration) => (
                    <div
                      key={integration.id}
                      className="int-box"
                      data-aos="zoom-in"
                      data-aos-delay={integration.delay}
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      <Image
                        src={integration.src}
                        alt={integration.alt}
                        width={98}
                        height={102}
                        className="round-10"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 col-md-2">
                <div className="int-logo">
                  <Image
                    src="/images/about/integration-circle.png"
                    alt="Shape"
                    width={308}
                    height={307}
                    className="d-block mx-auto"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="int-box-wrapper style-two">
                  {rightIntegrations.map((integration) => (
                    <div
                      key={integration.id}
                      className="int-box"
                      data-aos="zoom-in"
                      data-aos-delay={integration.delay}
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      <Image
                        src={integration.src}
                        alt={integration.alt}
                        width={98}
                        height={102}
                        className="round-10"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
