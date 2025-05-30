"use client";
import React, { useEffect, useState } from "react";
import HomeSlider from "@/app/(user)/homeSlider/page"
import { Services } from "./Javascript";
import About from "@/app/(user)/About/page";
import Service from "@/app/(user)/Services/page";
import DoctorPage from "../Doctor/page";
import AppointmentPage from "../Appointment/page";
import NewsDetailPage from "../News/page";
import Contact from "../Contact/page";
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


      <Contact/>


     
    </>
  );
}

export default Home;