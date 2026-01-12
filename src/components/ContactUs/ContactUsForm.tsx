"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import Image from "next/image";
import ContactInfo from "./ContactInfo";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Define the shape of the form state
interface ContactState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// Form initial state
const INITIAL_STATE: ContactState = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};
const ContactUsForm: React.FC = () => {
  const [contact, setContact] = useState<ContactState>(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, message } = contact;
      const payload = { name, email, number, subject, message };
      const response = await axios.post(url, payload);
      console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error("Error submitting the contact form:", error);
    }
  };

  return (
    <>
      <div className="container style-one pt-130">
        <div className="row">
          <div className="col-lg-5 mb-md-30">
            <div className="comment-form-box round-10">
              <form
                onSubmit={handleSubmit}
                className="comment-form style-one round-10"
              >
                <h3 className="fs-20 fw-semibold mb-18"> Get In Touch</h3>

                <div className="form-group position-relative mb-20">
                  <input
                    type="text"
                    name="name"
                    className="w-100 ht-52 round-5 bg-white text-para border-0"
                    placeholder="Name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-20">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-100 ht-52 round-5 bg-white text-para border-0"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-20">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone"
                    className="w-100 ht-52 round-5 bg-white text-para border-0"
                    value={contact.number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-20">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-100 ht-52 round-5 bg-white text-para border-0"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-20">
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Comment"
                    className="w-100 round-20 bg-white text-para border-0 resize-0"
                    value={contact.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div> 

                <button
                  className="btn style-three d-block w-100 fw-semibold position-relative round-oval"
                  type="submit"
                >
                  Send Message
                  <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src="/images/icons/right-arrow-white.svg"
                      alt="Icon"
                      width={18}
                      height={16}
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-7 ps-xxl-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
