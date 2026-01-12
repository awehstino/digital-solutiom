import React from "react";
import Image from "next/image";
import Link from "next/link";
import FilterByPrice from "./FilterByPrice";

const Sidebar: React.FC = () => {
  // Dynamic data for product categories
  const productCategories = [
    { name: "Digital Image", link: "/products/" },
    { name: "Future Design", link: "/products/" },
    { name: "Machine Learning", link: "/products/" },
    { name: "T Shirts", link: "/products/" },
    { name: "Gift Items", link: "/products/" },
    { name: "Others", link: "/products/" },
  ];

  // Dynamic data for latest products
  const latestProducts = [
    {
      id: 1,
      image: "/images/products/product-thumb-4.jpg",
      title: "Orange Eye",
      price: "$20.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 2,
      image: "/images/products/product-thumb-5.jpg",
      title: "Half Robot",
      price: "$30.00",
      rating: 5,
      link: "/products/details",
    },
    {
      id: 3,
      image: "/images/products/product-thumb-6.jpg",
      title: "Futuristic Man",
      price: "$80.00",
      rating: 5,
      link: "/products/details",
    },
  ];

  // Dynamic data for tags
  const tags = [
    { name: "Accessories", link: "/products/" },
    { name: "Toys", link: "/products/" },
    { name: "Images", link: "/products/" },
    { name: "Neural", link: "/products/" },
    { name: "AI Model", link: "/products/" },
    { name: "gifts", link: "/products/" },
  ];

  // Function to render star rating
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`ri-star${i < rating ? "-fill" : "-line"}`}></i>
    ));
  };

  return (
    <>
      <aside className="sidebar mt-lg-50">
        <form className="search-widget position-relative mb-30">
          <input
            type="search"
            placeholder="Search"
            className="fw-medium w-100 ht-56 bg_primary border-0 round-5 text-white outline-0"
          />
          <button className="position-absolute bg-transparent position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center border-0">
            <Image
              src="/images/icons/search-white.svg"
              alt="Icon"
              width={19}
              height={19}
            />
          </button>
        </form>

        {/* Product Category */}
        <div className="sidebar-widget category-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Product Category
          </h3>
          <ul className="list-unstyled mb-0">
            {productCategories.map((category, index) => (
              <li key={index}>
                <Link href={category.link} className="position-relative">
                  {category.name}{" "}
                  <Image
                    src="/images/icons/right-arrow-blue.svg"
                    alt="Icon"
                    width={16}
                    height={12}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FilterByPrice */}
        <FilterByPrice />

        {/* Latest Products */}
        <div className="sidebar-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Latest Products
          </h3>
          <div className="rp-post-wrap">
            {latestProducts.map((product) => (
              <div
                key={product.id}
                className="rp-post-card style-two d-flex flex-wrap align-items-center"
              >
                <div className="rp-post-img">
                  <Image
                    src={product.image}
                    alt="Post Thumb"
                    width={92}
                    height={92}
                  />
                </div>
                <div className="rp-post-info">
                  <div className="rating">{renderRating(product.rating)}</div>
                  <span className="fs-15 fw-bold text_primary">
                    {product.price}
                  </span>
                  <h5 className="fs-15 fw-medium mb-0">
                    <Link
                      href={product.link}
                      className="text-black link-hover-primary transition"
                    >
                      {product.title}
                    </Link>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="sidebar-widget tags-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-22">
            Tags
          </h3>
          <ul className="list-unstyled mb-0">
            {tags.map((tag, index) => (
              <li key={index}>
                <Link href={tag.link}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
