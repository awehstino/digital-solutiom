"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PricingPlans: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Dynamic pricing data
  const pricingData = {
    monthly: {
      plans: [
        {
          name: "Starter",
          price: "30.00",
          priceLabel: "Per Month",
          description: "Perfect for small teams or <br /> startups",
          popular: false,
        },
        {
          name: "Pro",
          price: "50.00",
          priceLabel: "Per Month",
          description: "Advanced tools for growing <br /> businesses",
          popular: true,
        },
        {
          name: "Business",
          price: "70.00",
          priceLabel: "Per Month",
          description: "Secure your cloud, network, and <br /> data at scale",
          popular: false,
        },
      ],
      features: [
        {
          name: "Weekly Security Reports",
          values: [true, true, true],
        },
        {
          name: "Real-Time AI Threat Monitoring",
          values: ["1 Admin User", "4 Admin User", "10 Admin User"],
        },
        {
          name: "Cloud & Endpoint Protection",
          values: [true, true, true],
        },
        {
          name: "Priority Email Support",
          values: [true, true, true],
        },
        {
          name: "Real-Time AI Threat Monitoring",
          values: [true, true, true],
        },
        {
          name: "API Access",
          values: [false, true, true],
        },
        {
          name: "Dedicated Account Manager",
          values: [false, false, true],
        },
      ],
    },
    yearly: {
      plans: [
        {
          name: "Starter",
          price: "60.00",
          priceLabel: "Per Year",
          description: "Perfect for small teams or <br /> startups",
          popular: false,
        },
        {
          name: "Pro",
          price: "80.00",
          priceLabel: "Per Yearly",
          description: "Advanced tools for growing <br /> businesses",
          popular: true,
        },
        {
          name: "Business",
          price: "90.00",
          priceLabel: "Per Yearly",
          description: "Secure your cloud, network, and <br /> data at scale",
          popular: false,
        },
      ],
      features: [
        {
          name: "Weekly Security Reports",
          values: [true, true, true],
        },
        {
          name: "Real-Time AI Threat Monitoring",
          values: ["10 Admin User", "15 Admin User", "20 Admin User"],
        },
        {
          name: "Cloud & Endpoint Protection",
          values: [true, true, true],
        },
        {
          name: "Priority Email Support",
          values: [true, true, true],
        },
        {
          name: "Real-Time AI Threat Monitoring",
          values: [true, true, true],
        },
        {
          name: "API Access",
          values: [false, true, true],
        },
        {
          name: "Dedicated Account Manager",
          values: [false, false, true],
        },
      ],
    },
  };

  const currentData = isYearly ? pricingData.yearly : pricingData.monthly;

  return (
    <>
      <div className="pricing-area style-two position-relative z-1 ptb-130 round-20">
        <Image
          src="/images/box-shape.png"
          alt="Shape"
          width={560}
          height={404}
          className="section-shape position-absolute top-0 end-0 z-n1"
        />
        <div className="container style-one">
          <div className="row align-items-center mb-40">
            <div className="col-xl-6 col-lg-7 mb-lg-20 pe-xxl-5">
              <span className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15">
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                PRICING PLANS
              </span>
              <h2 className="section-title style-one font-secondary fw-medium mb-0 pe-xxl-5">
                Flexible Cybersecurity Plans Tailored for Businesses Of All
                Sizes
              </h2>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="pricing-switch-wrap style-two position-relative d-flex justify-content-center ms-lg-auto">
                <label className="pricing_switch">
                  <input
                    type="checkbox"
                    id="togBtn"
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                  />
                  <span className="pricing_slider round">
                    <span className={`on ${!isYearly ? "active" : ""}`}>
                      Monthly
                    </span>
                    <span className={`off ${isYearly ? "active" : ""}`}>
                      Yearly
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="pricing-table style-one table-responsive">
            <table className="table text-nowrap align-middle">
              <thead>
                <tr>
                  <th scope="col"></th>
                  {currentData.plans.map((plan, index) => (
                    <th key={index} scope="col">
                      <div className="pricing-header text-center">
                        {plan.popular && (
                          <span className="featured position-absolute text-black fs-15">
                            Popular
                          </span>
                        )}
                        <span className="pricing-subtitle d-block fs-20 fw-medium font-secondary text-para mb-8">
                          {plan.name}
                        </span>
                        <span className="font-secondary d-block fwsemibold pricing-tag text1">
                          {plan.price}{" "}
                          <span className="fs-16 font-primary fw-medium text-para">
                            / {plan.priceLabel}
                          </span>
                        </span>
                        <p
                          className="text-para text-center mb-0"
                          dangerouslySetInnerHTML={{ __html: plan.description }}
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.features.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <th scope="row">
                      <span className="fw-medium text-title">
                        {feature.name}
                      </span>
                    </th>
                    {feature.values.map((value, valueIndex) => (
                      <td key={valueIndex}>
                        {typeof value === "boolean" ? (
                          value ? (
                            <span className="available">
                              <i className="ri-checkbox-circle-line"></i>
                            </span>
                          ) : (
                            <span className="unavailable">
                              <i className="ri-close-line"></i>
                            </span>
                          )
                        ) : (
                          <span className="text-para">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row"></th>
                  {currentData.plans.map((plan, index) => (
                    <td key={index}>
                      <Link
                        href="/login"
                        className="btn style-two fw-semibold position-relative round-oval"
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
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
