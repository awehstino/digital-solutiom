"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WishlistTable: React.FC = () => {
  // Dynamic wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "/images/products/product-thumb-1.jpg",
      name: "Half rhino robot",
      price: 40.0,
      inStock: true,
      link: "/products/details",
    },
    {
      id: 2,
      image: "/images/products/product-thumb-2.jpg",
      name: "Ferocious tiger",
      price: 30.0,
      inStock: false,
      link: "/products/details",
    },
    {
      id: 3,
      image: "/images/products/product-thumb-3.jpg",
      name: "Futuristic man",
      price: 20.0,
      inStock: true,
      link: "/products/details",
    },
  ]);

  // Handle item removal from wishlist
  const handleRemoveItem = (id: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle add to cart
  const handleAddToCart = (id: number) => {
    const item = wishlistItems.find((item) => item.id === id);
    if (item && item.inStock) {
      console.log(`Added ${item.name} to cart`);
      // Here you would typically add the item to the cart
      // You could also show a notification or update the cart state
    }
  };

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="cart-table table-responsive mb-20">
              <table className="table text-nowrap align-middle">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Availability</th>
                    <th scope="col">Add To Cart</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
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
                        <span className="text-black fw-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <span
                          className={
                            item.inStock ? "text-success" : "text-danger"
                          }
                        >
                          {item.inStock ? "In Stock" : "Out Of Stock"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn style-three fw-semibold position-relative round-oval"
                          type="submit"
                          onClick={() => handleAddToCart(item.id)}
                          disabled={!item.inStock}
                        >
                          Add To Cart
                          <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                            <Image
                              src="/images/icons/right-arrow-white.svg"
                              alt="Icon"
                              width={18}
                              height={16}
                            />
                          </span>
                        </button>
                      </td>
                      <td>
                        <button
                          className="cart-action bg-transparent border-0 p-0"
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label="Remove from wishlist"
                        >
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-md-7 offset-md-5 text-md-end">
                <Link
                  href="/products"
                  className="btn style-five fw-semibold position-relative round-oval"
                  type="submit"
                >
                  Continue Shopping
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

export default WishlistTable;
