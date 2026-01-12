import React from "react";
import Link from "next/link";

interface Props {
  pageTitle: string;
}

const PageBanner: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <div className="breadcrumb-area bg-f round-20 position-relative z-1">
        <div className="container text-center">
          <ul className="br-menu text-center bg_secondary d-inline-block list-unstyled text-uppercase mb-15">
            <li className="position-relative fs-13 fw-semibold ls-1 d-inline-block">
              <Link href="/">HOME</Link>
            </li>
            <li className="position-relative fs-13 fw-semibold ls-1 d-inline-block">
              {pageTitle}
            </li>
          </ul>
          <h2 className="section-title style-one fw-medium font-secondary text-black text-center mb-6">
            {pageTitle}
          </h2>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
