import React from "react";
import Image from "next/image";
import Link from "next/link";

const CheckoutForm: React.FC = () => {
  return (
    <>
      <div className="position-relative z-1 ptb-130">
        <div className="container style-one">
          <div className="row">
            <div className="col-lg-6 pe-xxl-4 mb-30">
              <h3 className="fs-20 fw-semibold mb-25">Billing Details</h3>

              <form className="checkout-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="last name"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="Town/City"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-20">
                      <select className="w-100 ht-50 bg-gray border-0 round-5 text-para">
                        <option value="0">Country</option>
                        <option value="1">USA</option>
                        <option value="2">USK</option>
                        <option value="3">Canada</option>
                        <option value="4">Japan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="State/City"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        placeholder="Postcode/ZIP Code"
                        className="w-100 ht-50 bg-gray border-0 round-5 text-para"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Order Notes"
                        className="w-100 ht-192 bg-gray border-0 round-5 text-para"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 ps-xxl-4">
              <h3 className="fs-20 fw-semibold mb-20">Your Cart</h3>
              <div className="table-responsive checkout-total round-10 mb-50">
                <table className="table text-nowrap align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="product-thumb-card d-flex flex-wrap align-items-center">
                          <div className="product-img bg-white d-flex flex-column align-items-center justify-content-center round-10 me-4">
                            <Image
                              src="/images/products/product-thumb-1.jpg"
                              alt="product"
                              width={104}
                              height={104}
                              className="w-100"
                            />
                          </div>
                          <Link
                            className="fs-16 fw-medium text-title link-hover-primary"
                            href="/products/details"
                          >
                            Half rhino man
                          </Link>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="text-title fw-medium">$30.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-thumb-card d-flex flex-wrap align-items-center">
                          <div className="product-img bg-white d-flex flex-column align-items-center justify-content-center round-10 me-4">
                            <Image
                              src="/images/products/product-thumb-3.jpg"
                              alt="product"
                              width={104}
                              height={104}
                              className="w-100"
                            />
                          </div>
                          <Link
                            className="fs-16 fw-medium text-title link-hover-primary"
                            href="/products/details"
                          >
                            Futuristic man
                          </Link>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="text-title fw-medium">$20.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="checkout-total-wrap">
                  <h6 className="fs-20 fw-semibold font-primary text-title mb-1">
                    Order Total
                  </h6>
                  <div className="checkout-total-item d-flex align-items-center justify-content-between">
                    <span>Order Total</span>
                    <span>$50.00</span>
                  </div>
                  <div className="checkout-total-item d-flex align-items-center justify-content-between">
                    <span>Shipping</span>
                    <span>$20.00</span>
                  </div>
                  <div className="checkout-total-item d-flex align-items-center justify-content-between">
                    <span>Coupon/Discount</span>
                    <span>$10.00</span>
                  </div>
                  <div className="checkout-total-item d-flex align-items-center justify-content-between">
                    <span className="text-black fw-semibold">Total</span>
                    <span className="text-black fw-semibold">$60.00</span>
                  </div>
                </div>
              </div>

              <div className="payment-method round-10">
                <h3 className="fs-20 fw-semibold mb-12">Payment Method</h3>
                <div className="select-payment-method d-flex flex-wrap align-items-center mb-20">
                  <div className="checkbox style-one">
                    <input type="radio" id="test4" name="radio-group" />
                    <label htmlFor="test4" className="text-title">
                      Bank
                    </label>
                  </div>
                  <div className="checkbox style-one">
                    <input type="radio" id="test2" name="radio-group" defaultChecked />
                    <label htmlFor="test2" className="text-title">
                      Card
                    </label>
                  </div>
                  <div className="checkbox style-one">
                    <input type="radio" id="test1" name="radio-group" />
                    <label htmlFor="test1" className="text-title">
                      Paypal
                    </label>
                  </div>
                </div>

                <form className="form-wrapper style-two">
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="w-100 ht-50 bg-white border-0 text-para round-10 outline-0"
                      placeholder="Name on card"
                    />
                  </div>

                  <div className="form-group mb-20">
                    <select className="w-100 bg-white ht-50 border-0 text-para round-10 outline-0">
                      <option value="0">Credit card Type</option>
                      <option value="1">Visa</option>
                      <option value="2">Mastercard</option>
                      <option value="3">Amex</option>
                      <option value="4">Discover</option>
                    </select>
                  </div>

                  <div className="form-group mb-20">
                    <input
                      type="number"
                      className="w-100 ht-50 bg-white border-0 text-para round-10 outline-0"
                      placeholder="Credit card number"
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="number"
                      className="w-100 ht-50 bg-white border-0 text-para  round-10 outline-0"
                      placeholder="Card verification number"
                    />
                  </div>

                  <div className="form-check checkbox style-two mt-3 mb-20">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="test_2"
                    />
                    <label className="form-check-label fs-15" htmlFor="test_2">
                      I&apos;ve read and accepted the{" "}
                      <Link
                        href="/terms-conditions"
                        className="text_primary link-hover-primary"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </label>
                  </div>

                  <button
                    className="btn style-six d-block w-100 fw-semibold position-relative round-oval"
                    type="submit"
                  >
                    Place Order Now
                    <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                      <Image
                        src="/images/icons/right-arrow-white.svg"
                        alt="Icon"
                        width={16}
                        height={15}
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
