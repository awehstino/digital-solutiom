import React from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "./Testimonials";

// Define the service data structure
type Service = {
  id: number;
  title: string;
  isActive?: boolean;
  link: string;
};

// Services data
const servicesData: Service[] = [
  {
    id: 1,
    title: "AI-Powered Threat Detection",
    isActive: false,
    link: "/services/details",
  },
  {
    id: 2,
    title: "Autonomous Incident Response",
    isActive: true,
    link: "/services/details",
  },
  {
    id: 3,
    title: "Cloud Security & Monitoring",
    isActive: false,
    link: "/services/details",
  },
  {
    id: 4,
    title: "Behavioral Analytics & Anomaly Detection",
    isActive: false,
    link: "/services/details",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="service-area style-one position-relative z-1 pt-130">
        <Image
          src="/images/section-shape-3.png"
          alt="Shape"
          width={458}
          height={777}
          className="section-shapeone position-absolute top-0 end-0 z-0"
        />
        <Image
          src="/images/section-shape-2.png"
          alt="Shape"
          width={539}
          height={873}
          className="section-shape-two position-absolute start-0 z-0"
        />

        <div className="container style-one pb-100">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center">
              <span className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15">
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                AIVOX AI CYBERSECURITY SERVICES
              </span>
              <h2 className="section-title style-one font-secondary fw-medium text-white mb-40 px-xxl-5">
                Ai-powered Threat Detection For Real-Time Attack Prevention
                Response
              </h2>
            </div>
          </div>

          <div className="service-card-wrap style-one">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`service-card style-one position-relative z-1 d-inline-flex flex-wrap align-items-center transition ${service.isActive ? "active" : ""
                  }`}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <span className="service-counter font-secondary">
                  {service.id.toString().padStart(2, "0")}
                </span>
                <h3 className="fs-24 fw-semibold text-white transition">
                  {service.title}
                </h3>
                <Link
                  href={service.link}
                  className="position-absolute top-0 start-0 w-100 h-100"
                ></Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </>
  );
};

export default Services;
