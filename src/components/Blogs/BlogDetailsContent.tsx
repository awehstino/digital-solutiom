"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BlogDetailsContent: React.FC = () => {

  const handlePostComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    MySwal.fire({
      title: "Success!",
      text: "Your comment has been submitted.",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-8">
            <div className="mb-55">
              <div className="mb-30">
                <ul className="blog-metainfo list-unstyled mb-20">
                  <li>
                    <Link
                      href="/blogs/category"
                      className="fs-15 text-white bg_primary round-oval px-3 py-1"
                    >
                      Startup
                    </Link>
                  </li>
                  <li>
                    By <Link href="/blogs/author">Admin</Link>
                  </li>
                  <li>12 Jul, 2025</li>
                </ul>

                <h1 className="font-secondary fw-medium pb-3">
                  How Predictive AI Is Transforming Decision-Making In Business
                </h1>

                <Image
                  src="/images/blog/single-blog-1.jpg"
                  alt="blog"
                  width={1140}
                  height={536}
                />
              </div>

              <div className="blog-desc">
                <p>
                  Predictive AI is no longer a futuristic concept  a
                  practical tool reshaping how organizations operate. From
                  forecasting demand to preventing equipment failures,
                  businesses are using AI to make decisions that are smarter,
                  and backed by real data. In this article, we’ll explore how
                  predictive AI is changing business
                </p>

                <h6>Benefits of Using Predictive AI</h6>
                <p>
                  AI offers businesses a powerful way to anticipate future
                  outcomes and make smarter, faster decisions By analyzing
                  historical patterns and real-time data, it enables companies
                  to reduce costs, minimize
                </p>

                <ul>
                  <li>
                    Anticipates future trends and outcomes with high accuracy
                  </li>
                  <li>Reduces operational costs through smarter planning</li>
                  <li>Enhances decision-making speed and confidence</li>
                  <li>Improves customer retention with proactive engagement</li>
                  <li>
                    Minimizes risk by identifying issues before they escalate
                  </li>
                </ul>

                <p>
                  Aivox development team is fast, responsive, and highly
                  skilled. Their AI app streamlined our loan approval process.
                </p>

                <h6>Challenges and Considerations</h6>
                <p>
                  Business leaders to move from reactive decision-making to
                  proactive, insight-driven strategies. As models improve and
                  data pipelines mature,
                </p>

                <ul>
                  <li>Data quality and availability</li>
                  <li>Model bias and fairness</li>
                  <li>Integration with legacy systems</li>
                  <li>Ensuring explain ability and compliance</li>
                </ul>

                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="/images/blog/single-blog-2.jpg"
                      alt="blog"
                      width={570}
                      height={320}
                    />
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/images/blog/single-blog-3.jpg"
                      alt="blog"
                      width={570}
                      height={320}
                    />
                  </div>
                </div>

                <h6>Conclusion</h6>
                <p>
                  Predictive AI empowers business leaders to move from reactive
                  decision-making to proactive, insight-driven strategies. As
                  models improve and data pipelines mature, companies that
                  embrace AI will lead their industries with greater clarity and
                  speed.
                </p>
              </div>
            </div>

            {/* Post Pagination */}
            <div className="post-pagination d-flex flex-wrap align-items-center justify-content-between mb-50">
              <button
                type="button"
                className="prev-post fs-xxl-18 fs-xx-14 fw-medium text-title hover-text-primary transition w-50 text-start"
              >
                <i className="ri-arrow-left-line"></i>Prev Article
              </button>

              <button
                type="button"
                className="next-post fs-xxl-18 fs-xx-14 fw-medium text-title hover-text-primary transition w-50 text-end"
              >
                Next Article<i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* Post Meta Option */}
            <div className="post-metaoption round-5 mb-50">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="post-tags d-flex flex-wrap align-items-center mb-sm-10">
                    <span className="fw-medium text-title me-2">Tags:</span>
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block me-1">
                        <Link
                          href="/blogs/tags"
                          className="text-para hover-text-primary transition"
                        >
                          AI Robotics
                        </Link>
                        ,
                      </li>
                      <li className="d-inline-block me-1">
                        <Link
                          href="/blogs/tags"
                          className="text-para hover-text-primary transition"
                        >
                          System
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="post-share d-flex flex-wrap align-items-center justify-content-md-end">
                    <span className="fw-medium text-title me-2">Share:</span>
                    <ul className="social-profile style-three list-unstyled mb-0">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        >
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/?lang=en"
                          target="_blank"
                          className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        >
                          <i className="ri-twitter-x-line"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        >
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Comment */}
            <div className="comment-item-wrap mb-55">
              <div className="comment-item d-flex flex-wrap">
                <div className="comment-author-img round-5">
                  <Image
                    src="/images/blog/avatar-1.jpg"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="round-5"
                  />
                </div>
                <div className="comment-author-info">
                  <h5 className="fs-16 fw-semibold font-primary text-title mb-12">
                    Sarah Wilson
                    <span className="comment-date fw-medium text-para">
                      3 days ago
                    </span>
                  </h5>
                  <p className="comment-text">
                    Business owners face increasing pressure to manage cash
                    flow, reduce tax burdens, and plan for sustainable growth.
                    Whether you are just launching your business or scaling an
                    existing operation, making the right financial moves
                  </p>
                  <a
                    href="#cmt-form"
                    className="reply-btn text_primary link-hover-primary fw-medium"
                  >
                    Reply
                  </a>
                </div>
              </div>

              <div className="comment-item d-flex flex-wrap reply">
                <div className="comment-author-img round-5">
                  <Image
                    src="/images/blog/avatar-2.jpg"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="round-5"
                  />
                </div>
                <div className="comment-author-info">
                  <h5 className="fs-16 fw-semibold font-primary text-title mb-12">
                    Charles Vaughan{" "}
                    <span className="comment-date fw-medium text-para">
                      2 days ago
                    </span>
                  </h5>
                  <p className="comment-text">
                    The instructors were highly knowledgeable, and the course
                    content was top-notch. I gained valuable insights and
                    hands-on experience
                  </p>
                  <a
                    href="#cmt-form"
                    className="reply-btn text_primary link-hover-primary fw-medium"
                  >
                    Reply
                  </a>
                </div>
              </div>

              <div className="comment-item d-flex flex-wrap">
                <div className="comment-author-img round-5">
                  <Image
                    src="/images/blog/avatar-3.jpg"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="round-5"
                  />
                </div>
                <div className="comment-author-info">
                  <h5 className="fs-16 fw-semibold font-primary text-title mb-12">
                    Machel Vaun
                    <span className="comment-date fw-medium text-para">
                      3 day ago
                    </span>
                  </h5>
                  <p className="comment-text">
                    This course is a very applicable. Professor Ng explains
                    precisely each algorithm and even tries to give an intuition
                    for mathematical and statistic concepts behind each
                    algorithm. Thank you very much.
                  </p>
                  <a
                    href="#cmt-form"
                    className="reply-btn text_primary link-hover-primary fw-medium"
                  >
                    Reply
                  </a>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="comment-form-box round-10">
              <form
                onSubmit={handlePostComment}
                className="comment-form style-one round-10"
                id="cmt-form"
              >
                <div className="row gx-xl-3">
                  <div className="col-12">
                    <h3 className="fs-20 fw-semibold mb-18">Add A Comment</h3>
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
                      <label className="form-check-label" htmlFor="test_2">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>

                    <div className="col-xl-5 col-md-6">
                      <button
                        className="btn style-three fw-semibold position-relative round-oval"
                        type="submit"
                      >
                        Post A Comment
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

          <div className="col-xl-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
