"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SearchForm: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div ref={dropdownRef} className="position-relative">
        <button
          className="search-btn bg-transparent border-0 d-flex flex-wrap align-items-center dropdown-toggle text-center p-0 transition"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <Image
            src="/images/icons/search-long-white.svg"
            alt="Search Icon"
            width={18}
            height={18}
          />
        </button>

        <div
          className={`search-dropdown dropdown-menu dropdown-menu-right top-1 border-0 ${isDropdownOpen ? "show" : ""
            }`}
        >
          <form className="search-popup position-relative">
            <input
              type="search"
              className="form-control text-para"
              placeholder="Search Here...."
            />
            <button
              type="submit"
              className="position-absolute top-0 end-0 h-100 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
            >
              <i className="ri-search-2-line"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
