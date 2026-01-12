import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import AnswerAllTheQuestions from "./AnswerAllTheQuestions";

const ServiceDetailsContent: React.FC = () => {
  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-8">
            <div className="service-desc">
              <h1>
                Aivox Delivers Intelligent, Scalable Ai Software Solutions To
                Automate Workflows Analyze Data, And Enhance Decision
              </h1>
              <p>
                We specialize in developing custom AI software solutions that
                solve real business problems. From automation to predictive
                analytics and natural language processing, our team builds
                scalable,
              </p>

              <Image
                src="/images/services/single-service-1.jpg"
                alt="service"
                width={1140}
                height={609}
                className="round-10"
              />

              <p>
                In today’s fast-paced and data-driven world, businesses are
                constantly seeking innovative ways to gain a edge, make smarter
                decisions, and deliver exceptional customer experiences. One
                technology{" "}
              </p>

              <ul>
                <li>
                  <span>Data Collection & Preparation –</span>
                  We gather and clean relevant datasets.
                </li>
                <li>
                  <span>Model Development –</span>
                  We train and evaluate AI/ML models.
                </li>
                <li className="position-relative">
                  <span>Application Development –</span>
                  We build user interfaces and backend systems.
                </li>
                <li className="position-relative">
                  <span>Integration & Deployment –</span>
                  We embed AI into your ecosystem.
                </li>
                <li className="position-relative">
                  <span>Monitoring & Support –</span>
                  We continuously optimize for accuracy and efficiency.
                </li>
              </ul>

              <h4 className="font-secondary fw-medium">Predictive Analytics</h4>
              <p>
                Aivox offers end-to-end AI software development services
                designed to help businesses automate processes, improve
                decision-making, and gain valuable insights from data. We build
                intelligent, secure, and scalable applications using the latest
                machine learning
              </p>

              <div className="blockquote d-flex flex-wrap align-items-center justify-content-between">
                <p className="text-title fw-medium">
                  Aivox development team is fast, responsive, and highly
                  skilled. Their AI app streamlined our loan approval process.
                </p>

                <div className="client-info">
                  <h5 className="fs-18 fw-semibold mb-1">Sarah Bennett</h5>
                  <span className="fs-15">CEO, FinCore Finance</span>
                </div>
                <Image
                  src="/images/icons/quote-white-large.svg"
                  alt="Icon"
                  width={61}
                  height={55}
                />
              </div>

              <h4 className="font-secondary fw-medium">
                Deep Learning Solutions
              </h4>
              <p>
                AI software development services designed to help businesses
                automate processes, improve decision-making, and gain valuable
                insights from data. We build intelligent, secure, and scalable
                applications using the latest machine learning and deep learning
                technologies.
              </p>

              {/* AnswerAllTheQuestions */}
              <AnswerAllTheQuestions />
            </div>
          </div>

          <div className="col-xl-4 ps-xxl-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
