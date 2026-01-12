import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookBusinessSolutionsForm from "./BookBusinessSolutionsForm";

const Sidebar: React.FC = () => {
  // Dynamic data for services
  const services = [
    { name: "Automated harvesting", href: "/services/details" },
    { name: "Smart irrigation systems", href: "/services/details" },
    { name: "Drone Monitoring", href: "/services/details" },
    { name: "Predictive analytics", href: "/services/details" },
    { name: "Robotics-based STEM", href: "/services/details" },
    { name: "Intelligent tutoring", href: "/services/details" },
  ];

  return (
    <>
      <div className="sidebar mt-lg-50">
        <div className="sidebar-widget round-10">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Other Services
          </h3>
          <ul className="service-category-list list-unstyled mb-0">
            {services.map((service, index) => (
              <li key={index}>
                <Link href={service.href}>
                  {service.name} <i className="ri-arrow-right-line"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="docs-widget style-one bg-f d-flex flex-column align-items-center justify-content-between text-center round-10 mb-35">
          <div>
            <span className="fw-medium text_secondary d-block mb-2">
              Download
            </span>
            <h6 className="fs-24 fw-semibold text-white">Services Brochure</h6>
          </div>
          <Link
            href="/checkout"
            className="btn style-seven fw-semibold position-relative round-oval"
            type="submit"
          >
            Proceed To Checkout
            <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
              <Image
                src="/images/icons/download-icon.svg"
                alt="Icon"
                width={15}
                height={16}
              />
            </span>
          </Link>
        </div>

        {/* BookBusinessSolutionsForm */}
        <BookBusinessSolutionsForm />

        <div
          className="promo-widget style-one bg-f d-flex flex-column justify-content-end align-items-start round-10"
          style={{ backgroundImage: "url(/images/promo-bg.jpg)" }}
        >
          <h3 className="fw-semibold text-white">
            <Link
              href="/services/details"
              className="text-white link-hover-white transition"
            >
              AI Strategy And Consulting
            </Link>
          </h3>
          <p className="text-offwhite mb-0">
            In today&apos;s fast-paced and data-driven world, businesses are
            constantly seeking innovative
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
