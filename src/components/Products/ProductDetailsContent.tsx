"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: "ri-facebook-fill",
  },
  {
    href: "https://x.com/?lang=en",
    icon: "ri-twitter-x-line",
  },
  {
    href: "https://www.instagram.com/",
    icon: "ri-instagram-line",
  },
  {
    href: "https://www.linkedin.com/",
    icon: "ri-linkedin-fill",
  },
];

const ProductDetailsContent: React.FC = () => {
  // State for quantity counter
  const [quantity, setQuantity] = useState<number>(1);

  // Handle quantity increment
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle quantity decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // Here you would typically add the item to cart with the selected quantity
    console.log(`Added ${quantity} item(s) to cart`);
    // You could also add additional functionality like showing a notification
  };

  // Handle add to wishlist
  const handleAddToWishlist = () => {
    // Here you would typically add the item to wishlist
    console.log("Added to wishlist");
    // You could also add additional functionality like showing a notification
  };

  // Tab functionality
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="row align-items-center mb-70">
              <div className="col-lg-6 mb-md-30 pe-xxl-1">
                <Image
                  src="/images/products/single-product-1.jpg"
                  alt="product"
                  width={700}
                  height={790}
                  className="round-10"
                />
              </div>

              <div className="col-lg-6 ps-xxl-5">
                <div className="single-product-info ms-xxl-2">
                  <h1 className="fs-24 fw-semibold w-xxl-75 mb-6">
                    Half robot panda
                  </h1>
                  <p className="product-price fw-semibold text_primary mb-12">
                    $30.00
                  </p>
                  <div className="rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <p className="product-desc">
                    Unlock accurate, real-time predictions powered by machine to
                    optimize your operations and stay ahead of trends.
                  </p>

                  <div className="product-quantity">
                    <span className="text-title fw-medium fs-15 d-block mb-8">
                      Quantity
                    </span>
                    <div className="d-flex flex-wrap align-items-center">
                      <div className="v-counter bg-transparent d-flex flex-wrap align-items-center justify-content-between">
                        <button
                          className="minusBtn bg-transparent border-0"
                          onClick={decrementQuantity}
                        ></button>
                        <input
                          type="text"
                          value={quantity}
                          className="count bg-transparent"
                          readOnly
                        />
                        <button
                          className="plusBtn bg-transparent border-0"
                          onClick={incrementQuantity}
                          aria-label="Increase quantity"
                        ></button>
                      </div>
                      <button
                        className="add-to-cart btn style-six fw-semibold position-relative round-oval"
                        type="submit"
                        onClick={handleAddToCart}
                      >
                        Add To Cart
                      </button>
                      <button
                        className="add-to-wishlist border-0 d-flex flex-column align-items-center justify-content-center rounded-circle"
                        onClick={handleAddToWishlist}
                      >
                        <i className="ri-heart-line"></i>
                      </button>
                    </div>
                  </div>

                  <ul className="shop-features list-unstyled">
                    <li>
                      <span className="text-black me-1">Category:</span>{" "}
                      <Link href="/products/" className="text-para hover-text-primary">
                        Gifts
                      </Link>
                    </li>
                    <li>
                      <span className="text-black me-1">Tags:</span>
                      <Link href="/products/" className="text-para hover-text-primary">
                        System
                      </Link>
                      ,{" "}
                      <Link href="/products/" className="text-para hover-text-primary">
                        AI
                      </Link>
                    </li>
                    <li>
                      <span className="text-black me-1">SKU:</span>{" "}
                      Coat-30751156
                    </li>
                  </ul>

                  <ul className="single-product-features list-unstyled">
                    <li>
                      <b className="fw-medium text-black d-block">
                        Material & Care
                      </b>
                      <span className="d-block">100% Genuine</span>
                      <span className="d-block">Machine-wash</span>
                    </li>
                  </ul>

                  <div className="post-share d-flex flex-wrap align-items-center">
                    <span className="fs-15 fw-medium text-title me-2">
                      Follow Us:
                    </span>
                    <ul className="social-profile style-four list-unstyled mb-0">
                      {socialLinks.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.href}
                            target="_blank"
                            className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                          >
                            <i className={social.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ul className="nav nav-tabs list-unstyled product-tablist d-flex align-items-center justify-content-start w-100 mb-20">
              <li className="nav-item border-0">
                <button
                  onClick={() => handleTabClick(0)}
                  className={`nav-link border-0 ${activeTab === 0 ? "active" : ""
                    }`}
                >
                  Description
                </button>
              </li>
              <li className="nav-item border-0">
                <button
                  onClick={() => handleTabClick(1)}
                  className={`nav-link border-0 ${activeTab === 1 ? "active" : ""
                    }`}
                >
                  Additional Information
                </button>
              </li>
              <li className="nav-item border-0">
                <button
                  onClick={() => handleTabClick(2)}
                  className={`nav-link border-0 ${activeTab === 2 ? "active" : ""
                    }`}
                >
                  Reviews(2)
                </button>
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 0 && (
                <div className="product-tab-content">
                  <p>
                    Aivox Predict is a powerful, cloud-based AI platform that
                    transforms your business data into accurate, real-time
                    forecasts. Built for decision-makers, it uses machine
                    learning to help you anticipate demand, minimize risk, and
                    respond to changes faster than ever. Whether you are in
                    retail, finance, logistics, or healthcare, Aivox Predict
                    makes advanced forecasting accessible—no data science team
                    required.
                  </p>

                  <ul>
                    <li>
                      <span>Real Time Predictions:</span> Get live insights
                      using up-to-date data for faster decisions.
                    </li>
                    <li>
                      <span>High Accuracy Forecasting:</span> Advanced ML models
                      ensure precision in demand, trends, and risk analysis.
                    </li>
                    <li>
                      <span>Customizable Dashboards:</span> Visualize key
                      metrics and prediction outcomes tailored to your business.
                    </li>
                    <li>
                      <span>Easy API Integration:</span> Seamlessly connects
                      with your existing systems (ERP, CRM, cloud databases).
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 1 && (
                <div className="product-tab-content">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque{" "}
                  </p>
                  <ul>
                    <li>
                      <span>Flexibility:</span> Learn anytime, anywhere, at your
                      own pace.
                    </li>
                    <li>
                      <span>Affordability:</span> Save money on travel,
                      accommodation, and tuition fees.
                    </li>
                    <li>
                      <span>Diverse Courses:</span> Access a wide range of
                      subjects from top institutions.
                    </li>
                    <li>
                      <span>Global Networking:</span> Connect with instructors
                      and learners worldwide.
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div className="comment-item-wrap mb-35">
                    <div className="comment-item d-flex flex-wrap">
                      <div className="comment-author-img round-5">
                        <Image
                          src="/images/blog/avatar-1.jpg"
                          alt="avatar"
                          className="round-5"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="comment-author-info">
                        <h5 className="fs-16 fw-semibold font-primary text-title mb-1">
                          Sarah Wilson
                        </h5>
                        <ul className="rating list-unstyled d-flex align-items-center ms-0 mb-10">
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                        </ul>
                        <p className="comment-text mb-0">
                          Business owners face increasing pressure to manage
                          cash flow, reduce tax burdens, and plan for
                          sustainable growth. Whether you are just launching your
                          business or scaling an existing operation, making the
                          right financial moves
                        </p>
                      </div>
                    </div>
                    <div className="comment-item d-flex flex-wrap">
                      <div className="comment-author-img round-5">
                        <Image
                          src="/images/blog/avatar-3.jpg"
                          alt="avatar"
                          className="round-5"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="comment-author-info">
                        <h5 className="fs-16 fw-semibold font-primary text-title mb-1">
                          Machel Vaun
                        </h5>
                        <ul className="rating list-unstyled d-flex align-items-center ms-0 mb-10">
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                          <li>
                            <i className="ri-star-fill"></i>
                          </li>
                        </ul>
                        <p className="comment-text mb-0">
                          This course is a very applicable. Professor Ng
                          explains precisely each algorithm and even tries to
                          give an intuition for mathematical and statistic
                          concepts behind each algorithm. Thank you very much.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="comment-form-box round-10">
                    <form
                      className="comment-form style-one round-10"
                      id="cmt-form"
                    >
                      <div className="row">
                        <div className="col-12">
                          <h3 className="fs-20 text-title mb-1">
                            Add A Review
                          </h3>
                          <p className="mb-15">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group position-relative mb-20">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select Rating</option>
                              <option value="1">5</option>
                              <option value="2">4</option>
                              <option value="3">3</option>
                              <option value="4">2</option>
                              <option value="5">1</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group position-relative mb-20">
                            <input
                              type="text"
                              required
                              className="w-100 ht-52 round-5 bg-white text-para border-0"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-20">
                            <input
                              type="email"
                              placeholder="Email"
                              required
                              className="w-100 ht-52 round-5 bg-white text-para border-0"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-20">
                            <textarea
                              name="messages"
                              id="messages"
                              cols={30}
                              rows={10}
                              placeholder="Comment"
                              className="w-100 round-20 bg-white text-para border-0 resize-0"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check checkbox style-two mb-25">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="test_2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="test_2"
                            >
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                          <div className="col-xl-5 col-md-6">
                            <button
                              className="btn style-three fw-semibold position-relative round-oval"
                              type="submit"
                            >
                              Post A Review
                              <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                                <Image
                                  src="/images/icons/right-arrow-white.svg"
                                  alt="Icon"
                                  width={18}
                                  height={16}
                                />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContent;
