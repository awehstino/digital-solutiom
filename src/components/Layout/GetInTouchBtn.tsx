"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const GetInTouchBtn: React.FC = () => {
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
      <div
        ref={dropdownRef}
        className="mobile-options position-relative d-lg-none me-3"
      >
        <button
          className="dropdown-toggle text-center bg-transparent border-0 p-0 transition"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <i className="ri-more-fill"></i>
        </button>

        <div
          className={`dropdown-menu dropdown-menu-centered mobile-option-list top-1 border-0 ${
            isDropdownOpen ? "show" : ""
          }`}
          data-bs-popper="static"
        >
          <Link
            href="/contact/"
            className="btn style-three fw-semibold position-relative round-oval bg-black text-white"
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            Get In Touch
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
    </>
  );
};

export default GetInTouchBtn;
