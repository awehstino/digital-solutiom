import React from "react";
import Image from "next/image";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  return (
    <>
      <div className="container ptb-130">
        <div
          className="account-wrap style-two bg-f position-relative z-1"
          style={{ backgroundImage: "url(/images/login-bg-2.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="account-box round-10">
                <h4 className="fs-20 fw-semibold text-center mb-2">
                  Register Your Account
                </h4>

                <p className="text-center mb-22">
                  Let’s get Started with Your 30 days free trial
                </p>

                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  className="btn style-11 fw-medium w-block d-block text-center mx-xl-5 position-relative"
                >
                  <Image
                    src="/images/icons/google.svg"
                    alt="Google"
                    width={22}
                    height={23}
                  />
                  Login With Google
                </a>

                <div className="or-text text-center position-relative">
                  <span>Or</span>
                </div>

                <form className="form-wrapper style-two">
                  <div className="form-group mb-20">
                    <input
                      type="email"
                      placeholder="Name*"
                      className="w-100 border-0 round-10 outline-0 text-para"
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-100 border-0 round-10 outline-0 text-para"
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="password"
                      placeholder="Password*"
                      className="w-100 border-0 round-10 outline-0 text-para"
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="password"
                      placeholder="Confirm Password*"
                      className="w-100 border-0 round-10 outline-0 text-para"
                    />
                  </div>
                  <div className="form-check checkbox style-two mb-25">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="test_20"
                    />
                    <label
                      className="form-check-label text-para"
                      htmlFor="test_20"
                    >
                      I&apos;ve read and agree to the{" "}
                      <Link
                        href="/terms-conditions"
                        className="text_primary link-hover-primary"
                      >
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text_primary link-hover-primary"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    className="btn style-12 position-relative z-1 w-100 fw-medium d-block border-0"
                    type="submit"
                  >
                    Register
                  </button>

                  <p className="mt-4 mb-0">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text_primary link-hover-primary"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
