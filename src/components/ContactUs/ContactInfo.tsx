import React from "react";
import Image from "next/image";

const ContactInfo: React.FC = () => {
  // Dynamic data for contact cards
  const contactCards = [
    {
      id: 1,
      icon: "/images/icons/phone-black.svg",
      title: "Call Center",
      items: [
        { text: "+2348076533635", link: "tel:+2348076533635" },
      ],
    },
    {
      id: 2,
      icon: "/images/icons/pin-black.svg",
      title: "Our Location",
      items: [
        {
          text: "5th Floor, Heritage Place, 21 Lugard Ave, Ikoyi, Lagos 106104, Lagos",
          link: null,
        },
      ],
    },
    {
      id: 3,
      icon: "/images/icons/pin-black.svg",
      title: "Email",
      items: [
        {
          text: "contact@digitalsolutionplanet.com",
          link: "mailto:contact@digitalsolutionplanet.com",
        },
      ],
    },
  ];

  // Dynamic data for social links
  const socialLinks = [
    {
      id: 1,
      icon: "ri-facebook-fill",
      url: "https://www.facebook.com/",
    },
    {
      id: 2,
      icon: "ri-twitter-x-line",
      url: "https://x.com/?lang=en",
    },
    {
      id: 3,
      icon: "ri-instagram-line",
      url: "https://www.instagram.com/",
    },
    {
      id: 4,
      icon: "ri-linkedin-fill",
      url: "https://www.linkedin.com/",
    },
  ];

  return (
    <>
      <div className="contact-content ps-xxl-5 ms-xxl-3 mb-60">
        <h2 className="section-title style-one font-secondary fw-medium text-title mb-18">
          We Are Always Ready To Help You And Answer Your Questions
        </h2>
        <p className="mb-45">
          We are here to help you with any questions you may have. Reach out to us and we'll respond as soon as we can.
        </p>

        <div className="contact-card-wrap style-one d-flex flex-wrap position-relative">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="contact-card style-two d-flex flex-wrap gap-2"
            >
              <span className="contact-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_secondary">
                <Image src={card.icon} alt="Icon" width={15} height={15} />
              </span>
              <div>
                <h6 className="fs-16 fw-semibold mb-12">{card.title}</h6>
                {card.items.map((item, index) => (
                  <div key={index}>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="d-block text-para hover-text-primary"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="contact-card style-two">
            <h6 className="fs-16 fw-semibold mb-25 d-block">Follow Us</h6>
            <ul className="social-profile style-four list-unstyled mb-0">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
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

      <Image
        src="/images/contact-img.png"
        alt="contact"
        className="contact-img d-block mx-auto"
        width={300}
        height={326}
      />
    </>
  );
};

export default ContactInfo;
