import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";

const ProjectDetailsContent: React.FC = () => {
  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-8">
            <div className="project-desc">
              <h1>
                Reducing Hospital Readmissions With Predictive AI In Healthcare
              </h1>

              <Image
                src="/images/projects/single-project-1.jpg"
                alt="project"
                width={1140}
                height={516}
              />

              <p>
                Aivox partnered with Medi Bridge Health, a leading healthcare
                provider, to develop a predictive model capable of identifying
                high-risk patients based on electronic health records (EHR), lab
                data, and prior history. Our goal was to reduce hospital
                readmissions by enabling proactive care.
              </p>

              <h6>Project Overview</h6>
              <p>
                At Aivox, we collaborated with MediBridge Health to tackle a
                critical issue in the healthcare sector: unplanned patient
                readmissions. By developing a predictive AI model using
                real-time clinical data and historical records, we enabled the
                hospital to identify high-risk individuals before complications
                occurred.
              </p>

              <h6>The Solution</h6>
              <p>
                We built a machine learning model trained on anonymized EHR
                data, lab results, and patient notes. Key features included:
              </p>
              <ul>
                <li>Feature engineering from clinical records</li>
                <li>Gradient Boosting & Random Forest algorithms</li>
                <li>HIPAA-compliant data pipelines</li>
                <li>Real-time risk dashboards for physicians</li>
                <li>Integration with hospital’s internal portal</li>
              </ul>

              <div className="row">
                <div className="col-md-6">
                  <Image
                    src="/images/projects/single-project-2.jpg"
                    alt="project"
                    width={570}
                    height={347}
                  />
                </div>
                <div className="col-md-6">
                  <Image
                    src="/images/projects/single-project-3.jpg"
                    alt="project"
                    width={570}
                    height={347}
                  />
                </div>
              </div>

              <h6>Technologies used</h6>
              <ul>
                <li>
                  <span>Python –</span> Core language for data processing and
                  model development
                </li>
                <li>
                  <span>Scikit-learn & XGBoost –</span> For predictive modeling
                  and algorithm optimization
                </li>
                <li>
                  <span>Pandas & NumPy –</span> For structured data manipulation
                  and transformation
                </li>
                <li>
                  <span>Jupyter Note book –</span> For exploratory data analysis
                  and prototyping
                </li>
                <li>
                  <span>AWS Sage Maker –</span> For model training, hosting, and
                  deployment in a secure cloud environment
                </li>
                <li>
                  <span>PostgreSQL –</span> To manage patient-related metadata
                  and processed outputs
                </li>
                <li>
                  <span>Apache Airflow –</span> For automating data pipelines
                  and model retraining workflows
                </li>
              </ul>

              <h6>Key Benefits</h6>
              <ul>
                <li>
                  <span>Reduced Readmissions by 22%</span> Enabled proactive care with accurate patient risk scoring,
                  decreasing unplanned hospital returns.
                </li>
                <li>
                  <span>Improved Early Intervention by 30%</span> Gave doctors real-time insights to act sooner and prevent
                  complications.
                </li>
                <li>
                  <span>95%+ Model Accuracy</span> Built a robust, validated machine learning model using
                  real-world clinical data.
                </li>
                <li>
                  <span>Seamless System Integration</span> Integrated easily
                  into the hospital’s existing portal and workflows with minimal
                  training required.
                </li>
              </ul>
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

export default ProjectDetailsContent;
