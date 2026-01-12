import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <>
      <div className="cta-area style-two bg-f position-relative z-1 ptb-130 round-20">
        <div className="container style-one">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-md-6 pe-xxl-5 mb-md-30">
              <span className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15">
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                CALL TO ACTION
              </span>
              <h2 className="section-title style-one text-title fw-medium mb-0">
                Ready to Experience AI-Powered Cybersecurity That Works
              </h2>
            </div>

            <div className="col-xxl-6 offset-xxl-1 col-md-6">
              <div className="circle-text-wrap rounded-circle position-relative ms-md-auto">
                <span className="bg_primary position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                  <Image
                    src="/images/icons/up-right-arrow-white.svg"
                    alt="Icon"
                    width={19}
                    height={18}
                    className="transition"
                  />
                </span>
                <Image
                  src="/images/request-demo.svg"
                  alt="request"
                  width={227}
                  height={230}
                  className="circle-text d-block mx-auto rotate"
                />

                <Link
                  href="/contact"
                  className="position-absolute top-0 start-0 w-100 h-100 z-1"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
