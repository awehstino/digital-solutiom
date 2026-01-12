"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartTable: React.FC = () => {
  // Dynamic cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/images/products/product-thumb-1.jpg",
      name: "Half rhino robot",
      price: 40.00,
      quantity: 1,
      link: "/products/details"
    },
    {
      id: 2,
      image: "/images/products/product-thumb-2.jpg",
      name: "Ferocious tiger",
      price: 30.00,
      quantity: 1,
      link: "/products/details"
    },
    {
      id: 3,
      image: "/images/products/product-thumb-3.jpg",
      name: "Futuristic man",
      price: 20.00,
      quantity: 1,
      link: "/products/details"
    }
  ]);

  // Cart totals
  const [cartTotals, setCartTotals] = useState({
    subtotal: 90.00,
    shipping: 20.00,
    discount: 10.00,
    total: 100.00
  });

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    // Recalculate totals
    const newSubtotal = cartItems.reduce((sum, item) => {
      if (item.id === id) {
        return sum + (item.price * newQuantity);
      }
      return sum + (item.price * item.quantity);
    }, 0);

    setCartTotals(prev => ({
      ...prev,
      subtotal: newSubtotal,
      total: newSubtotal + prev.shipping - prev.discount
    }));
  };

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    if (!itemToRemove) return;

    setCartItems(prevItems => prevItems.filter(item => item.id !== id));

    // Recalculate totals
    const newSubtotal = cartItems.reduce((sum, item) => {
      if (item.id !== id) {
        return sum + (item.price * item.quantity);
      }
      return sum;
    }, 0);

    setCartTotals(prev => ({
      ...prev,
      subtotal: newSubtotal,
      total: newSubtotal + prev.shipping - prev.discount
    }));
  };

  // Handle coupon code
  const handleApplyCoupon = () => {
    // Here you would typically validate and apply the coupon
    console.log("Coupon applied");
    // For demo purposes, we'll add a $5 discount
    setCartTotals(prev => ({
      ...prev,
      discount: prev.discount + 5,
      total: prev.subtotal + prev.shipping - (prev.discount + 5)
    }));
  };

  // Handle update cart
  const handleUpdateCart = () => {
    console.log("Cart updated");
    // Here you would typically send the updated cart to the backend
  };

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="cart-table table-responsive mb-70">
              <table className="table text-nowrap align-middle">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="product-img">
                          <Image
                            src={item.image}
                            alt="product"
                            width={104}
                            height={104}
                            className="w-100"
                          />
                        </div>
                      </td>
                      <td>
                        <Link
                          className="fs-xxl-18 fw-medium text-title link-hover-primary transition"
                          href={item.link}
                        >
                          {item.name}
                        </Link>
                      </td>
                      <td>
                        <span className="text-black fw-medium">${item.price.toFixed(2)}</span>
                      </td>
                      <td>
                        <div className="v-counter d-flex flex-wrap align-items-center justify-content-between">
                          <button
                            className="minusBtn bg-transparent border-0"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          ></button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="count"
                            readOnly
                          />
                          <button
                            className="plusBtn bg-transparent border-0"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          ></button>
                        </div>
                      </td>
                      <td>
                        <span className="text-black fw-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <button
                          className="cart-action bg-transparent border-0 p-0"
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label="Remove item"
                        >
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row align-items-start mb-45">
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-8 pe-xxl-0">
                <div className="coupon-code position-relative mb-30 me-xxl-3">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="w-100 border-0 bg-gray text-para"
                  />
                  <button
                    type="button"
                    className="btn bg_primary fs-15 text-white z-1 border-0"
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-4 text-md-end">
                <button
                  className="btn style-five fw-semibold position-relative round-oval"
                  type="submit"
                  onClick={handleUpdateCart}
                >
                  Update Cart
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
        </div>
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2 px-xxl-2">
            <div className="cart-total bg-gray round-10">
              <h3 className="fs-16 fw-semibold  text-title mb-20">
                Cart Total
              </h3>
              <div className="cart-total-wrap mb-35">
                <div className="cart-total-item d-flex align-items-center justify-content-between">
                  <span>Subtotal</span>
                  <span>${cartTotals.subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-total-item d-flex align-items-center justify-content-between">
                  <span>Shipping</span>
                  <span>${cartTotals.shipping.toFixed(2)}</span>
                </div>
                <div className="cart-total-item d-flex align-items-center justify-content-between">
                  <span>Discount</span>
                  <span>${cartTotals.discount.toFixed(2)}</span>
                </div>
                <div className="cart-total-item d-flex align-items-center justify-content-between">
                  <span className="fw-semibold text-black">Total</span>
                  <span className="fw-semibold text-black">${cartTotals.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/checkout"
                  className="btn style-three fw-semibold position-relative round-oval"
                  type="submit"
                >
                  Proceed To Checkout
                  <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src="/images/icons/right-arrow-white.svg"
                      alt="Icon"
                      width={18}
                      height={16}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;