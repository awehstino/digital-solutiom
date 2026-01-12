"use client";

import React, { useState, useEffect } from "react";

const FilterByPrice: React.FC = () => {
  // State for price range values
  const [minPrice, setMinPrice] = useState<number>(40);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [minRange] = useState<number>(40);
  const [maxRange] = useState<number>(560);

  // Calculate progress bar position and width
  const [progressStyle, setProgressStyle] = useState({
    left: "0%",
    width: "100%",
  });

  // Update progress bar when prices change
  useEffect(() => {
    const minPercent = ((minPrice - minRange) / (maxRange - minRange)) * 100;
    const maxPercent = ((maxPrice - minRange) / (maxRange - minRange)) * 100;

    setProgressStyle({
      left: `${minPercent}%`,
      width: `${maxPercent - minPercent}%`,
    });
  }, [minPrice, maxPrice, minRange, maxRange]);

  // Handle min price change
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  // Handle max price change
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <>
      <div className="sidebar-widget category-widget bg-gray round-10">
        <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-15">
          Filter By Price
        </h3>
        <div className="range-slider-container">
          <div className="range-slider">
            <div className="range-progress" style={progressStyle}></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              min={minRange}
              max={maxRange}
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="range"
              min={minRange}
              max={maxRange}
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
          <div className="d-flex flex-wrap align-items-center mt-3">
            <div className="fs-15 price-display text-para fw-medium">
              Price:
              <span className="d-inline-block me-2">${minPrice}</span> -{" "}
              <span className="d-inline-block">${maxPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
