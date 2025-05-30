"use client";
import React, { useEffect, useState } from "react";
import HomeSlider from "@/app/(user)/homeSlider/page"
import { Services } from "./Javascript";
import About from "@/app/(user)/About/page";
import Service from "@/app/(user)/Services/page";
import DoctorPage from "../Doctor/page";
import AppointmentPage from "../Appointment/page";
import NewsDetailPage from "../News//page";
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
      {/* home section */}
      <HomeSlider />
      {/* Welcome to Bista Polyclinic */}
      <About />
      {/* My Services */}
      <Service />



      {/* meet our doctor  */}
      <DoctorPage />


      {/* News page */}
        <NewsDetailPage/>
      {/* Appointment */}
      <AppointmentPage />


      {/* Our Location */}
      <section className="py-5">
        <div className="container border">
          <h2 className="text-center fw-bold">Our Location</h2>
          <p className="text-center mb-5 text-secondary">
            We are conveniently located in the heart of Sisahaniya, easily
            accessible by public transportation.
          </p>
          <div className="row justify-content-between">
            {/* Google Map */}
            <div className="col-md-8 mb-4 mb-md-0 shadow Google_map p-3">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.792241685426!2d82.64891677536298!3d27.846924076102844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a52d310096c1%3A0x755cd9290d7a9868!2sBista%20polyclinic!5e0!3m2!1sen!2snp!4v1747974848282!5m2!1sen!2snp"
                width={850}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-md-1"></div>
            {/* Contact Information */}
            <div className="col-md-3 text-start">
              <h3 className="fw-bold">Contact Information</h3>
              <p>
                <strong>Address</strong>
                <br />
                RMW2+QH9, Sisahaniya 22400
              </p>
              <p>
                <strong>Phone Number</strong>
                <br />
                +27 (0)12 664-0222
              </p>
              <p>
                <strong>Email Address</strong>
                <br />
                info@bistapoliclinic.co.za
              </p>
              <p>
                <strong>Working Hours</strong>
                <br />
                Monday - Friday: 8:00 AM – 8:00 PM
                <br />
                Saturday: 9:00 AM – 6:00 PM
                <br />
                Sunday: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
