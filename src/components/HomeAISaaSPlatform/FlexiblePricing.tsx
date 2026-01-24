"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FlexiblePricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const monthlyPlans = [
    {
      title: "Starter",
      description: "Get started with Digital Solution at no cost",
      price: "20.00",
      period: "/Month, Per User",
      features: [
        "Unlimited AI credits",
        "50,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
        "3 Workflow Automations",
        "Basic Analytics Dashboard",
        "Community Support",
      ],
      isPopular: true,
      priceClass: "text1",
    },
    {
      title: "Pro",
      description: "Get started with Digital Solution at no cost",
      price: "60.00",
      period: "/Month, Per User",
      features: [
        "Unlimited AI credits",
        "50,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
        "3 Workflow Automations",
        "Basic Analytics Dashboard",
        "Community Support",
      ],
      isPopular: false,
      priceClass: "text1",
    },
  ];

  const yearlyPlans = [
    {
      title: "Starter",
      description: "Get started with Digital Solution at no cost",
      price: "50.00",
      period: "/Year, Per User",
      features: [
        "Unlimited AI credits",
        "80,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
        "7 Workflow Automations",
        "Basic Analytics Dashboard",
        "Community Support",
      ],
      isPopular: true,
      priceClass: "text2",
    },
    {
      title: "Pro",
      description: "Get started with Digital Solution at no cost",
      price: "90.00",
      period: "/Year, Per User",
      features: [
        "Unlimited AI credits",
        "80,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
        "7 Workflow Automations",
        "Basic Analytics Dashboard",
        "Community Support",
      ],
      isPopular: false,
      priceClass: "text2",
    },
  ];

  const renderPlans = (plans: typeof monthlyPlans) => {
    return plans.map((plan, index) => (
      <div key={index} className="col-xl-6 col-md-6">
        <div className="pricing-card style-one bg-white round-10 mb-30">
          <div className="pricing-header position-relative round-10">
            {plan.isPopular && (
              <span className="fs-15 fw-medium featured text-title position-absolute end-0">
                Popular
              </span>
            )}
            <h5 className="font-secondary text-title fs-20 fw-medium mb-0">
              {plan.title}
            </h5>
            <p className="mb-20">{plan.description}</p>
            <h2
              className={`font-secondary fw-medium pricing-tag text-title ${plan.priceClass} mb-0`}
            >
              ${plan.price}
              <span className="fs-16 font-primary fw-normal text-para">
                {plan.period}
              </span>
            </h2>
          </div>
          <h6 className="fs-16 fw-medium text-para text-decoration-underline mb-15">
            What&apos;s Included
          </h6>
          <ul className="pricing-features list-unstyled">
            {plan.features.map((feature, fIndex) => (
              <li key={fIndex} className="position-relative">
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/login"
            className="btn style-two d-block fw-semibold position-relative z-1 round-oval"
          >
            Get Started
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
      </div>
    ));
  };

  return (
    <>
      <div className="pricing-area style-one position-relative z-1 pt-130 pb-100">
        <div className="container style-one position-relative z-2">
          <div className="row">
            <div className="col-xl-4 pe-xxl-5 mb-lg-20">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Flexible Pricing
              </span>
              <h2 className="section-title style-one fw-medium text-title mb-45">
                Get Started with A Plan That Scales With You
              </h2>
              <div className="pricing-switch-wrap style-one position-relative d-flex justify-content-center">
                <label className="pricing_switch">
                  <input
                    type="checkbox"
                    id="togBtn"
                    checked={isYearly}
                    onChange={handleToggle}
                  />
                  <span className="pricing_slider round">
                    <span className="on">Monthly</span>
                    <span className="off">Yearly</span>
                  </span>
                </label>
              </div>
            </div>
            
            <div className="col-xl-8">
              {/* Monthly Pricing */}
              <div className={`row ${isYearly ? "d-none" : "d-flex"}`}>
                {renderPlans(monthlyPlans)}
              </div>
              {/* Yearly Pricing */}
              <div className={`row ${isYearly ? "d-flex" : "d-none"}`}>
                {renderPlans(yearlyPlans)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="move-text-wrapper overflow-hidden">
          <div className="move-text style-five overflow-hidden">
            <ul className="list-unstyled mb-0">
              <li className="position-relative font-secondary">
                CHOOSE THE PLAN THAT FITS YOUR GROWTH GOALS{" "}
              </li>
              <li className="position-relative font-secondary">
                FLEXIBLE PRICING BUILT FOR STARTUPS TO ENTERPRISES
              </li>
              <li className="position-relative font-secondary">
                CHOOSE THE PLAN THAT FITS YOUR GROWTH GOALS{" "}
              </li>
              <li className="position-relative font-secondary">
                FLEXIBLE PRICING BUILT FOR STARTUPS TO ENTERPRISES
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexiblePricing;
