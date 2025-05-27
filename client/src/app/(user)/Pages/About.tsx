"use client";
import { useState } from 'react'
import { slides, welcomeData } from '../Pages/Javascript'
// import { useState } from "react";

function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => setExpanded(!expanded);
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row align-items-center bg-white shadow rounded-4 p-4 g-4">
            {/* Image Section */}
            <div className="col-12 col-lg-6">
              <div
                id="carouselAutoplay"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={slide.image}
                        className="d-block w-100 img-fluid"
                        alt={slide.alt}
                        style={{ maxHeight: "320px", objectFit: "cover" }}
                      />
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                        <h5 className="text-white">{slide.caption}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselAutoplay"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselAutoplay"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <div className="d-flex flex-column flex-md-row justify-between align-items-center gap-3">
                <h2 className="fw-bold m-0 text-center text-md-start">
                  {welcomeData.title}
                </h2>

                <div className="bg-success text-white rounded-4 shadow-sm py-2 px-4 text-center">
                  <div className="fw-bold fs-3">20+</div>
                  <div className="fw-semibold small">Years Of Experience</div>
                </div>
              </div>
              <hr className="mx-auto mx-lg-0" />

              {/* Responsive text logic */}
              <p className="text-muted d-lg-none">
                {expanded
                  ? welcomeData.intro + " " + welcomeData.details
                  : welcomeData.intro.slice(0, 80) + "..."}
              </p>

              {/* Full text always visible on large screens */}
              <div className="text-muted d-none d-lg-block">
                <p>{welcomeData.intro}</p>
                <p>{welcomeData.details}</p>
              </div>

              {/* Toggle button only for small screens */}
              <div className="d-lg-none">
                <button
                  className="btn btn-link p-0 text-primary"
                  onClick={toggleText}
                >
                  {expanded ? "See Less" : "See More"}
                </button>
              </div>

              {/* <button className="btn btn-primary mt-3 px-4">
                {welcomeData.buttonText}
              </button> */}
            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default About
