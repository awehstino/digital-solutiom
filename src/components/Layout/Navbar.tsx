"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./SearchForm";
import { usePathname } from "next/navigation";
import GetInTouchBtn from "./GetInTouchBtn";
// Menus data
import { menus } from "../../components/Layout/Menus";

// Define types for our menu data structure
type MenuItem = {
  title: string;
  href?: string;
  children?: MenuItem[];
};

// Component for rendering desktop menu items recursively
const DesktopMenuItem: React.FC<{
  item: MenuItem;
  pathname: string;
  depth?: number;
}> = ({ item, pathname, depth = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === pathname;

  return (
    <li className={hasChildren ? "menu-item-has-children" : ""}>
      {hasChildren ? (
        <Link href="#" onClick={(e) => e.preventDefault()}>
          {item.title}
          <i
            className={`ri-arrow-${depth === 0 ? "down" : "right"}-s-fill`}
          ></i>
        </Link>
      ) : (
        <Link
          href={item.href || "#"}
          className={`nav-link ${isActive ? "active" : ""}`}
        >
          {item.title}
        </Link>
      )}
      {hasChildren && (
        <ul className="menu-subs menu-column-1">
          {item.children?.map((child, index) => (
            <DesktopMenuItem
              key={`${item.title}-${index}`}
              item={child}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// Component for rendering mobile menu items recursively
const MobileMenuItem: React.FC<{
  item: MenuItem;
  pathname: string;
  openDropdowns: Record<string, boolean>;
  toggleDropdown: (key: string) => void;
  depth?: number;
}> = ({ item, pathname, openDropdowns, toggleDropdown, depth = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === pathname;
  const menuKey = `${item.title}-${depth}`;

  return (
    <li>
      {hasChildren ? (
        <>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(menuKey);
            }}
          >
            {item.title}
            <i
              className={`ri-arrow-down-s-fill ${
                openDropdowns[menuKey] ? "rotate-icon" : ""
              }`}
            ></i>
          </Link>
          <ul
            className={`dropdown-menus ${openDropdowns[menuKey] ? "show" : ""}`}
          >
            {item.children?.map((child, index) => (
              <MobileMenuItem
                key={`${item.title}-${index}`}
                item={child}
                pathname={pathname}
                openDropdowns={openDropdowns}
                toggleDropdown={toggleDropdown}
                depth={depth + 1}
              />
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.href || "#"}
          className={`nav-link ${isActive ? "active" : ""}`}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Sticky Navbar
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);
  

  // Mobile Menu
  const [isActiveMobileMenu, setActiveMobileMenu] = useState(true);
  const handleToggleMobileMenu = () => {
    setActiveMobileMenu(!isActiveMobileMenu);
  };

  // State for dropdown menus
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  // Toggle dropdown menu
  const toggleDropdown = (menuKey: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // Close all dropdowns when mobile menu closes
  useEffect(() => {
    if (isActiveMobileMenu) {
      setOpenDropdowns({});
    }
  }, [isActiveMobileMenu]);

  return (
    <>
      <div className="navbar-area style-one position-relative" id="navbar">
        <div className="container-fluid">
          <div className="navbar-wrapper d-flex justify-content-between align-items-center">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={128}
                height={41}
              />
            </Link>
            <div className="menu-area mx-auto">
              <div className="overlay"></div>
              <nav className="menu">
                <ul className="menu-section p-0 mb-0 lh-1">
                  {menus.map((item, index) => (
                    <DesktopMenuItem
                      key={index}
                      item={item}
                      pathname={pathname}
                    />
                  ))}
                </ul>
              </nav>
            </div>

            <div className="other-options d-flex flex-wrap align-items-center justify-content-end">
              <div className="option-item">
                <div className="d-flex flex-wrap align-items-center">
                  {/* GetInTouchBtn for mobile devices */}
                  <GetInTouchBtn />
                  {/* SearchForm */}
                  <SearchForm />
                </div>
              </div>

              {/* Get In Touch for Desktop */}
              <div className="option-item d-none d-lg-block">
                <Link
                  href="/contact"
                  className="btn style-eight fw-semibold position-relative round-oval"
                >
                  Get In Touch
                  <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src="/images/icons/right-arrow-black.svg"
                      alt="Icon"
                      width={18}
                      height={16}
                    />
                  </span>
                </Link>
              </div>

              {/* Burger Menu for Mobile */}
              <div className="option-item d-lg-none">
                <button
                  type="button"
                  className="menu-mobile-trigger"
                  onClick={handleToggleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isActiveMobileMenu ? "" : "active"}`}>
        <div className="mobile-menu-header d-flex justify-content-end">
          <button className="close-btn" onClick={handleToggleMobileMenu}>
            <i className="ri-close-large-line"></i>
          </button>
        </div>
        <ul className="mobile-menu-list">
          {menus.map((item, index) => (
            <MobileMenuItem
              key={index}
              item={item}
              pathname={pathname}
              openDropdowns={openDropdowns}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
