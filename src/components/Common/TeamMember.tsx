"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const TeamMember: React.FC = () => {
  // Dynamic data for team members
  const teamMembersData = [
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
  ];

  return (
    <>
      <div className="container style-one pt-130">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center">
            <span className="section-subtitle style-two d-inline-block text_primary fw-bold fs-14 ls-15 mb-12">
              TEAM MEMBER
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5">
              A Team Member In The Companys AI And Robotics Division
            </h2>
          </div>
        </div>
      </div>
      
      <div className="team-slider-wrap position-relative pb-130">
        <div className="container">
          <Swiper
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="team-slider-one"
          >
            {teamMembersData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-card style-one position-relative z-1 overflow-hidden text-center round-10">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
