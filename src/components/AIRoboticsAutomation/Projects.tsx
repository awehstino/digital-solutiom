"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Projects: React.FC = () => {
  // Dynamic data for projects
  const projectsData = [
    {
      id: 1,
      counter: "01",
      category: "Automation",
      title: "Industrial Automation",
      backgroundImage: "/images/projects/project-1.jpg",
      link: "/projects/details",
    },
    {
      id: 2,
      counter: "02",
      category: "Robotics",
      title: "Surgical Robotics",
      backgroundImage: "/images/projects/project-2.jpg",
      link: "/projects/details",
    },
    {
      id: 3,
      counter: "03",
      category: "Automation",
      title: "Advances Sensors",
      backgroundImage: "/images/projects/project-3.jpg",
      link: "/projects/details",
    },
    {
      id: 4,
      counter: "04",
      category: "Automation",
      title: "Autonomous Vehicles",
      backgroundImage: "/images/projects/project-4.jpg",
      link: "/projects/details",
    },
    {
      id: 5,
      counter: "05",
      category: "AI Technology",
      title: "Machine Learning",
      backgroundImage: "/images/projects/project-5.jpg",
      link: "/projects/details",
    },
  ];

  return (
    <>
      <div className="container style-one pt-130">
        <div className="row justify-content-center mb-40">
          <div className="col-xl-6 col-md-8 text-center">
            <span className="d-block fs-14 fw-bold ls-15 text_primary mb-12">
              PROJECTS
            </span>
            <h2 className="section-title style-one fw-medium text-title">
              Smart Robotic Assembly Line Automation For Global Electronics
            </h2>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-130">
        <Swiper
          spaceBetween={8}
          autoHeight={true}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="project-slider-one"
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card style-one position-relative z-1">
                <div
                  className="project-bg bg-f position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    backgroundImage: `url('${project.backgroundImage}')`,
                  }}
                ></div>
                <span className="project-counter">{project.counter}</span>
                <div className="project-info d-flex flex-wrap align-items-end justify-content-between">
                  <div>
                    <span className="project-category d-inline-block fs-15 fw-medium round-oval">
                      {project.category}
                    </span>
                    <h3 className="fs-24 fw-semibold mb-0">
                      <Link
                        href={project.link}
                        className="text-black link-hover-white trasnition"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  <Link
                    href={project.link}
                    className="project-link d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary"
                  >
                    <Image
                      src="/images/icons/up-right-arrow-white.svg"
                      alt="Icon"
                      width={13}
                      height={13}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
