"use client";
import React, { useEffect } from "react";
import { cardData } from "./Javascript";
import { welcomeData } from "./Javascript";
import { Services } from "./Javascript";
import { slides } from "./Javascript";

function Home() {
  useEffect(() => {
    const carousel = document.querySelector("#carouselAutoplay");
    if (carousel && typeof window !== "undefined" && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: "carousel",
        pause: false,
      });
    }
  }, []);
  return (
    <>
      {/* HOme section  */}
      <section className="bg-dark min-vh-100 d-flex align-items-center Home text-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0  Home_body">
              <p className="text-uppercase small fw-bold mb-2">
                Welcome to Medcare
              </p>
              <h1 className="display-4 fw-bold">
                Taking care of your health is our top priority.
              </h1>
              <p className="mt-3 mb-4 text-dark fw-bold">
                Being healthy is more than just not getting sick. It entails
                mental, physical, and social well-being. It's not just about
                treatment, it's about healing.
              </p>
              <button variant="success" size="lg">
                Book An Appointment
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/S.N.jpg"
              alt="Doctor"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
       
      </section>
    </>
  );
}

export default Home;
