import React from "react";
import Image from "next/image";

const BookBusinessSolutionsForm: React.FC = () => {
  return (
    <>
      <div className="sidebar-widget round-10">
        <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
          Book Business Solutions
        </h3>
        <form className="booking-form">
          <div className="form-group mb-10">
            <input
              type="text"
              className="w-100 ht-50 text-para outline-0 border-0"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-10">
            <input
              type="text"
              className="w-100 ht-50 text-para outline-0 border-0"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-10">
            <select className="w-100 ht-50 text-para outline-0 border-0">
              <option value="0">Service Type</option>
              <option value="1">AI Technology</option>
              <option value="2">Robotics</option>
              <option value="3">Machine Learning</option>
            </select>
          </div>
          <div className="form-group mb-10">
            <textarea
              className="w-100 text-para outline-0 border-0"
              placeholder="Messages"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn style-six d-block w-100 fw-semibold position-relative round-oval"
          >
            Send Message
            <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
              <Image
                src="/images/icons/right-arrow-white.svg"
                alt="Icon"
                width={18}
                height={16}
              />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default BookBusinessSolutionsForm;
