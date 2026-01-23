import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

// Define data structures for footer content
const logoData = {
  src: "/images/favicon.png",
  alt: "Logo",
  width: 128,
  height: 41,
  href: "/",
};

const quickLinks = [
  { text: "Features", href: "/about-us", useLink: false },
  { text: "About Us", href: "/about-us", useLink: true },
  { text: "Testimonials", href: "/testimonials", useLink: true },
  { text: "Pricing", href: "/pricing-plan", useLink: true },
  { text: "Blog", href: "/blogs", useLink: true },
];

const contactInfo = [
  {
    icon: "/images/icons/pin-small.svg",
    label: "Address",
    content: "5th Floor, Heritage Place, 21 Lugard Ave, Ikoyi, Lagos 106104, Lagos",
    iconWidth: 13,
    iconHeight: 16,
  },
  {
    icon: "/images/icons/mail-small.svg",
    label: "Email",
    content: "contact@digitalsolutionplanet.com",
    href: "mailto:contact@digitalsolutionplanet.com",
    iconWidth: 13,
    iconHeight: 16,
  },
  {
    icon: "/images/icons/phone-small.svg",
    label: "Phone",
    content: "+2348076533635",
    href: "tel:+2348076533635",
    iconWidth: 13,
    iconHeight: 16,
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    target: "_blank",
    icon: "ri-facebook-fill",
  },
  {
    href: "https://x.com/?lang=en",
    target: "_blank",
    icon: "ri-twitter-x-line",
  },
  {
    href: "https://www.instagram.com/",
    target: "_blank",
    icon: "ri-instagram-line",
  },
  {
    href: "https://www.linkedin.com/",
    target: "_blank",
    icon: "ri-linkedin-fill",
  },
];

const copyrightData = {
  logoSrc: "/images/logo-large.png",
  logoAlt: "Logo",
  logoWidth: 1882,
  logoHeight: 395,
  companyName: "Digital Solution",
  ownerName: "SCROFT",
  ownerHref: "https://",
};

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area style-one bg-black position-relative z-1 pt-130">
        <div className="container style-one">
          <div className="row justify-content-center mb-40">
            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="footer-widget mb-30">
                <Link href={logoData.href} className="logo">
                  <Image
                    src={logoData.src}
                    alt={logoData.alt}
                    width={logoData.width}
                    height={logoData.height}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="footer-widget mb-30 ps-xxl-5 ms-xxl-1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h3 className="footer-widget-title text-white fs-18 fw-semibold">
                  Quick Links
                </h3>
                <ul className="footer-menu list-unstyled mb-0">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.useLink ? (
                        <Link href={link.href}>{link.text}</Link>
                      ) : (
                        <a href={link.href}>{link.text}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 ps-xxl-0 pe-xxl-5 pe-lg-4"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="footer-widget mb-30">
                <h3 className="footer-widget-title text-white fs-18 fw-semibold">
                  Address
                </h3>
                <ul className="contact-info list-unstyled mb-0">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="position-relative">
                      <Image
                        src={info.icon}
                        alt="Icon"
                        width={info.iconWidth}
                        height={info.iconHeight}
                      />
                      <span className="text-white fw-medium">
                        {info.label} :
                      </span>{" "}
                      {info.href ? (
                        <a href={info.href} className="d-block">
                          {info.content}
                        </a>
                      ) : (
                        info.content
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 ps-xxl-4 pe-xxl-1"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="footer-widget mb-30">
                <NewsletterForm />
                <div className="post-share d-flex flex-wrap align-items-center">
                  <span className="text-white fw-medium me-2">Follow Us :</span>
                  <ul className="social-profile style-one list-unstyled mb-0">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.href}
                          target={social.target}
                          className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        >
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom position-relative overflow-hidden z-1">
          <div className="container-fluid position-relative px-xxl-4">
            <Image
              src={copyrightData.logoSrc}
              alt={copyrightData.logoAlt}
              width={copyrightData.logoWidth}
              height={copyrightData.logoHeight}
            />
            <p className="copyright-text position-absolute z-1 bg_primary round-oval d-inline-block text-white text-center mb-0">
              <i className="ri-copyright-line"></i>
              <span className="text_secondary fw-semibold">
                {copyrightData.companyName}{" "}
              </span>
              Is Proudly Owned By{" "}
              <a
                href={copyrightData.ownerHref}
                target="_blank"
                className="link style-one fw-semibold"
                style={{
                  color: "#d4ff12 !important",
                }}
              >
                {copyrightData.ownerName}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
