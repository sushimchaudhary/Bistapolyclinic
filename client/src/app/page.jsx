"use client";

import About from './(user)/Pages/About';
import Doctors from './(user)/Pages/Doctors';
import  Home from './(user)/Pages/Home'
import  News from './(user)/Pages/News'
import Services from './(user)/Pages/Services';
import OurServices from './(user)/Pages/OurServices';
import "./globals.css";
import React from 'react'
import Contact from './(user)/Pages/Contact';
function page() {
  return (
    <>
    <Home/>
    <About/>
    <Services/>
    <OurServices/>
    <Doctors/>
    <News/>
    <Contact/>
    
    </>
  )
}

export default page