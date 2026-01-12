"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Define team member data structure
interface TeamMember {
  id: number;
  name: string;
  position: string;
  backgroundImage: string;
  thumbnail: string;
}

const TeamMember: React.FC = () => {
  // Dynamic data for team members
  const teamMembersData: TeamMember[] = [
    {
      id: 1,
      name: "Elena Marlowe",
      position: "Chief Automation Strategist",
      backgroundImage: "/images/team/team-1.jpg",
      thumbnail: "/images/team/team-thumb-1.jpg",
    },
    {
      id: 2,
      name: "Ravi Deshmukh",
      position: "Director of Operations",
      backgroundImage: "/images/team/team-2.jpg",
      thumbnail: "/images/team/team-thumb-2.jpg",
    },
    {
      id: 3,
      name: "Sophia Zhang",
      position: "Robotics Integration Manager",
      backgroundImage: "/images/team/team-3.jpg",
      thumbnail: "/images/team/team-thumb-3.jpg",
    },
    {
      id: 4,
      name: "Lucas Anders",
      position: "Senior AI Engineer",
      backgroundImage: "/images/team/team-4.jpg",
      thumbnail: "/images/team/team-thumb-4.jpg",
    },
    {
      id: 5,
      name: "Luca Moretti",
      position: "LogicBay Systems",
      backgroundImage: "/images/team/team-5.jpg",
      thumbnail: "/images/team/team-thumb-5.jpg",
    },
    {
      id: 6,
      name: "James Holdon",
      position: "Director of Machine",
      backgroundImage: "/images/team/team-6.jpg",
      thumbnail: "/images/team/team-thumb-6.jpg",
    },
    {
      id: 7,
      name: "Carlos Mendes",
      position: "Director of Innovation",
      backgroundImage: "/images/team/team-7.jpg",
      thumbnail: "/images/team/team-thumb-7.jpg",
    },
    {
      id: 8,
      name: "Tom Richards",
      position: "Chief Operating Officer",
      backgroundImage: "/images/team/team-8.jpg",
      thumbnail: "/images/team/team-thumb-8.jpg",
    },
    {
      id: 9,
      name: "Ravi Deshmukh",
      position: "Director of Operations",
      backgroundImage: "/images/team/team-2.jpg",
      thumbnail: "/images/team/team-thumb-2.jpg",
    },
    {
      id: 10,
      name: "Sophia Zhang",
      position: "Robotics Integration Manager",
      backgroundImage: "/images/team/team-3.jpg",
      thumbnail: "/images/team/team-thumb-3.jpg",
    },
    {
      id: 11,
      name: "Lucas Anders",
      position: "Senior AI Engineer",
      backgroundImage: "/images/team/team-4.jpg",
      thumbnail: "/images/team/team-thumb-4.jpg",
    },
    {
      id: 12,
      name: "Luca Moretti",
      position: "LogicBay Systems",
      backgroundImage: "/images/team/team-5.jpg",
      thumbnail: "/images/team/team-thumb-5.jpg",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Reference to the container for scrolling
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = teamMembersData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(teamMembersData.length / itemsPerPage);

  // Handle page change with scroll to top
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the component
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={containerRef} className="container style-one pt-130">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center">
            <span className="section-subtitle style-two d-inline-block text_primary fw-bold fs-14 ls-15 mb-12">
              TEAM MEMBER
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5">
              A Team Member In The Companys AI And Robotics Division
            </h2>
          </div>
        </div>
      </div>
      <div className="team-slider-wrap position-relative pb-130">
        <div className="container">
          <div className="row justify-content-center">
            {currentMembers.map((member) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={member.id}>
                <div className="team-card style-one position-relative z-1 overflow-hidden text-center round-10 mb-35">
                  <div
                    className="team-member-bg position-absolute top-0 start-0 w-100 h-100 transition"
                    style={{
                      backgroundImage: `url('${member.backgroundImage}')`,
                    }}
                  ></div>
                  <div className="team-thumb rounded-circle mx-auto">
                    <Image
                      src={member.thumbnail}
                      alt={member.name}
                      width={570}
                      height={746}
                      className="rounded-circle transition"
                    />
                  </div>
                  <div className="team-info position-relative z-1">
                    <h3 className="fs-20 fw-semibold text-title transition">
                      {member.name}
                    </h3>
                    <span className="fs-15 d-block transition">
                      {member.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* pagination */}
          {teamMembersData.length > itemsPerPage && (
            <div className="pagination-area d-flex align-items-center justify-content-center mt-xl-4">
              <button
                type="button"
                className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <Image
                  src="/images/icons/left-arrow-blue.svg"
                  alt="Icon"
                  width={18}
                  height={16}
                />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    className={`page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle ${
                      currentPage === number ? "current" : ""
                    }`}
                    onClick={() => paginate(number)}
                  >
                    {number.toString().padStart(2, "0")}
                  </button>
                )
              )}
              <button
                type="button"
                className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                disabled={currentPage === totalPages}
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
      </div>
    </>
  );
};

export default TeamMember;
