import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const CareerDetailsContent: React.FC = () => {
  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-8 pe-xxl-4">
            <div className="job-desc">
              <h1>
                We’re Hiring: Machine Learning Engineer to Create Real-World AI
                Solutions
              </h1>
              <p>
                we’re on a mission to build intelligent, impactful AI
                solutions—and we’re looking for a skilled Machine Learning
                Engineer to join our team. In this role, you’ll work at the
                intersection of data
              </p>

              <Image
                src="/images/job/single-job-1.jpg"
                alt="job"
                width={1140}
                height={533}
                className="round-10"
              />

              <h6>Key Responsibilities</h6>
              <ul>
                <li>
                  Develop and maintain machine learning models for
                  classNameification, prediction, and clustering tasks.
                </li>
                <li>
                  Collaborate with data scientists, engineers, and product
                  managers to integrate ML into production systems.
                </li>
                <li>
                  Analyze datasets, clean data, and experiment with different
                  algorithms to improve performance.
                </li>
                <li>
                  Conduct A/B testing and evaluate models using real-world data.
                </li>
                <li>
                  Stay up to date with the latest ML research and best
                  practices.
                </li>
              </ul>

              <h6>Requirements</h6>
              <ul>
                <li>
                  Bachelor or Master in Computer Science, Data Science, or
                  related field.
                </li>
                <li>
                  2+ years of experience working with machine learning libraries
                  (TensorFlow, PyTorch, scikit-learn).
                </li>
                <li>
                  Solid understanding of data structures, algorithms, and
                  software engineering principles.
                </li>
                <li>
                  Experience with Python, SQL, and cloud platforms (AWS, GCP, or
                  Azure).
                </li>
                <li>
                  Familiarity with model deployment, MLOps, and REST APIs is a
                  plus.
                </li>
              </ul>

              <h6>Preferred Qualification</h6>
              <ul>
                <li>Experience in deep learning, NLP, or computer vision.</li>
                <li>
                  Contributions to open-source ML projects or research papers.{" "}
                </li>
                <li>
                  Exposure to large-scale systems and real-time data processing.{" "}
                </li>
              </ul>

              <div className="blockquote round-10">
                <p className="text-title fw-medium">
                  Aivox development team is fast, responsive, and highly
                  skilled. Their AI app streamlined our loan approval process.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
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
              </div>

              <h6>What We Offer</h6>
              <ul>
                <li>Competitive salary + performance bonus</li>
                <li>Flexible remote-first work environment</li>
                <li>Career growth and mentorship programs</li>
                <li>Tech budget for learning and home office setup</li>
              </ul>

              <Link
                href="/login"
                className="btn style-three fw-semibold position-relative round-oval"
              >
                Apply Now For This Job
                <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Image
                    src="/images/icons/right-arrow-white.svg"
                    alt="Icon"
                    width={18}
                    height={16}
                    style={{
                      lineHeight: 0,
                      margin: 0
                    }}
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 ps-xxl-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsContent;
