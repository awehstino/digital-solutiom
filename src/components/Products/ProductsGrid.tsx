"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductsGrid: React.FC = () => {
  // Dynamic product data
  const productsData = [
    {
      id: 1,
      image: "/images/products/product-1.jpg",
      title: "Orange eyes",
      price: "$20.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 2,
      image: "/images/products/product-2.jpg",
      title: "Cyberpunk woman",
      price: "$25.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 3,
      image: "/images/products/product-3.jpg",
      title: "Futuristic man",
      price: "$50.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 4,
      image: "/images/products/product-4.jpg",
      title: "Digital landscape",
      price: "$35.00",
      rating: 4,
      link: "/products/details",
    },
    {
      id: 5,
      image: "/images/products/product-5.jpg",
      title: "Neon city",
      price: "$45.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 6,
      image: "/images/products/product-6.jpg",
      title: "AI portrait",
      price: "$30.00",
      rating: 4,
      link: "/products/details",
    },
    {
      id: 7,
      image: "/images/products/product-2.jpg",
      title: "Cyberpunk woman",
      price: "$25.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 8,
      image: "/images/products/product-3.jpg",
      title: "Futuristic man",
      price: "$50.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 9,
      image: "/images/products/product-4.jpg",
      title: "Digital landscape",
      price: "$35.00",
      rating: 4,
      link: "/products/details",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6; // Number of items per page

  // Ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const totalPages: number = Math.ceil(productsData.length / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

  // Determine if pagination should be shown
  const showPagination = productsData.length > itemsPerPage;

  // Scroll to top when page changes
  useEffect(() => {
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to render star rating
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`ri-star${i < rating ? "-fill" : "-line"}`}></i>
    ));
  };

  return (
    <>
      <div className="container ptb-130" ref={containerRef}>
        <div className="row justify-content-center">
          {currentItems.map((product) => (
            <div key={product.id} className="col-xl-4 col-md-6">
              <div className="product-card style-one img-hover-wrap mb-45">
                <div className="product-img position-relative img-hover overflow-hidden z-1 round-10">
                  <Image
                    src={product.image}
                    alt="avatar"
                    width={570}
                    height={670}
                    className="round-10 transition"
                  />
                  <div className="product-action d-flex flex-wrap align-items-center justify-content-center">
                    <button className="add-to-cart border-0 d-flex flex-column align-items-center justify-content-center rounded-circle text-white fs-18">
                      <i className="ri-shopping-cart-line"></i>
                    </button>
                    <button className="add-to-wishlist border-0 d-flex flex-column align-items-center justify-content-center rounded-circle text-white fs-18">
                      <i className="ri-poker-hearts-line"></i>
                    </button>
                  </div>
                </div>
                <div className="product-info d-flex flex-wrap justify-content-between">
                  <div className="product-title">
                    <h3 className="fs-18 fw-semibold mb-0">
                      <Link
                        href={product.link}
                        className="text-title link-hover-primary"
                      >
                        {product.title}
                      </Link>
                    </h3>
                    <span className="text_primary fw-semibold">
                      {product.price}
                    </span>
                  </div>
                  <div className="rating">{renderRating(product.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - only show if there are more items than itemsPerPage */}
        {showPagination && (
          <div className="pagination-area d-flex align-items-center justify-content-center mt-xl-3">
            <button
              type="button"
              className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <Image
                src="/images/icons/left-arrow-blue.svg"
                alt="Icon"
                width={18}
                height={16}
              />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  className={`page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle ${currentPage === pageNumber ? "current" : ""
                    }`}
                  onClick={() => handlePageChange(pageNumber)}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
                >
                  {pageNumber.toString().padStart(2, "0")}
                </button>
              )
            )}

            <button
              type="button"
              className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <Image
                src="/images/icons/right-arrow-blue-2.svg"
                alt="Icon"
                width={18}
                height={16}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
