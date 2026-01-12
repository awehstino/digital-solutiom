"use client";

import React, { useState } from "react";

const FunFacts: React.FC = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic data for fun facts
  const funFactsData = [
    {
      number: "5",
      suffix: "M+",
      description: "SATISFIED CLIENTS ALL OVER THE WORLD",
    },
    {
      number: "22",
      suffix: "K+",
      description: "ACTIVE <br /> CUSTOMERS",
    },
    {
      number: "1",
      suffix: "K+",
      description: "CLIENTS SATISFACTORY REVIEWS",
    },
    {
      number: "99",
      suffix: "%",
      description: "SUCCESS <br /> RATE",
    },
    {
      number: "88",
      suffix: "+",
      description: "TEAM <br /> MEMBERS",
    },
  ];

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 px-lg-0">
            <div className="counter-card-wrap style-one d-flex flex-wrap">
              <div className="counter-card style-three">
                <div className="counter-video bg-f position-relative">
                  <button
                    type="button"
                    className="play-video d-flex flex-wrap align-items-center justify-content-center"
                    onClick={openModal}
                  >
                    <span className="play-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_secondary">
                      <i className="ri-play-large-fill"></i>
                    </span>
                    <span className="play-text fs-xxl-18 fw-semibold text-white ls-1">
                      PLAY VIDEO
                    </span>
                  </button>
                </div>
              </div>
              {funFactsData.map((item, index) => (
                <div
                  key={index}
                  className="counter-card style-three d-flex flex-column align-items-start justify-content-center"
                >
                  <h4 className="font-secondary fw-semibold text-black">
                    <span className="transition">{item.number}</span>
                    {item.suffix}
                  </h4>
                  <p
                    className="fs-14 fw-semibold ls-1 d-block mb-0"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Video Modal */}
      {isModalOpen && (
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div
            className="custom-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <button className="modal-close-btn" onClick={closeModal}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/78GehqOuq-A?si=31DBA3bPiBxY1i1G" // Replace with your video ID
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles for the modal */}
      <style jsx>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .custom-modal-content {
          position: relative;
          width: 90%;
          max-width: 800px;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
        }

        .modal-header {
          padding: 10px 15px;
          background-color: #f8f9fa;
          display: flex;
          justify-content: flex-end;
        }

        .modal-close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
        }

        .modal-body {
          padding: 0;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default FunFacts;
