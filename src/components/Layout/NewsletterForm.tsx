import React from "react";
import Image from "next/image";

const NewsletterForm: React.FC = () => {
  return (
    <>
      <h3 className="text-white fs-20 font-secondary fw-medium mb-12">
        Subscribe To Our Newsletter
      </h3>
      <form className="newsletter-form position-relative">
        <input
          type="email"
          className="fs-15 w-100 bg-transparent text-white outline-0"
          placeholder="Enter Your Email"
        />
        <button className="position-absolute bg-transparent border-0 end-0">
          <Image
            src="/images/icons/plane-small.svg"
            alt="Icon"
            width={15}
            height={13}
          />
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;
