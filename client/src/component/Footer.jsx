'use client';

import { IoIosArrowUp } from "react-icons/io";

import React, { useEffect, useState, } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerData = {
  clinic: {
    name: "BISTA POLYCLINIC",
    description:
      "Bista Polyclinic is a premier healthcare institution committed to providing exceptional medical care with a focus on patient comfort and well-being.",
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      // { icon: <FaLinkedinIn />, link: "#" },
    ],
  },
  // links: [
  //   "Home",
  //   "About",
  //   "Our Services",
  //   "Our Doctors",
  //   "News & Updates",
  //   "Contact us",
  // ],
  contact: {
    address: "Sisahaniya, Rapti-7, Dang",
    email: "info@bistapoliclinic.com",
    phone: "+01 234 567 88",
    locationCode: "RMW2+QH9, Sisahaniya 22400",
  },
  hours: {
    weekdays: "8:00 AM - 8:00 PM",
    saturday: "Closed",
  },
  emergency: {
    note: "Available 24/7",
    number: "+977 1 4123457",
  },
};

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="bg-primary text-white pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
            {/* Clinic Info */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="fw-bold mb-3">{footerData.clinic.name}</h5>
              <p className="small">{footerData.clinic.description}</p>
              <div className="d-flex gap-2 mt-3">
                {footerData.clinic.social.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="d-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-25 text-white"
                    style={{ width: "36px", height: "36px" }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-lg-2">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >Home
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >About
                  </a>
                </li>
                <li>
                  <a
                    href="/Services"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/Doctor"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >Our Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="/News"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >News & Updates
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="footer-link text-white-50 small d-block mb-2 text-decoration-none"
                  >Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-6 col-lg-3">
              <h5 className="fw-bold mb-3">Contact</h5>
              <ul className="list-unstyled small">
                <li className="d-flex align-items-start mb-2">
                  <FaMapMarkerAlt className="me-2 mt-1" />
                  {footerData.contact.address}
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2" />
                  <a href={`mailto:${footerData.contact.email}`} className="text-white-50 text-decoration-none">
                    {footerData.contact.email}
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaPhoneAlt className="me-2" />
                  <a href={`tel:${footerData.contact.phone}`} className="text-white-50 text-decoration-none">
                    {footerData.contact.phone}
                  </a>
                </li>
                <li className="d-flex align-items-start">
                  <FaMapMarkerAlt className="me-2 mt-1" />
                  {footerData.contact.locationCode}
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="col-12 col-lg-4">
              <h5 className="fw-bold mb-3">Opening Hours</h5>
              <ul className="list-unstyled small mb-3">
                <li className="d-flex justify-content-between border-bottom pb-1 mb-2">
                  <span>Sunday - Friday</span>
                  <span>{footerData.hours.weekdays}</span>
                </li>
                <li className="d-flex justify-content-between border-bottom pb-1 mb-2">
                  <span>Saturday</span>
                  <span>{footerData.hours.saturday}</span>
                </li>
              </ul>
              <div>
                <h6 className="fw-semibold">Emergency Services</h6>
                <p className="small mb-1">{footerData.emergency.note}</p>
                <p className="fw-bold fs-6">Call: {footerData.emergency.number}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 small text-white-50">
            &copy; {new Date().getFullYear()} {footerData.clinic.name}. All rights reserved.
          </div>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fw-bold fixed bottom-5 right-5 p-3 rounded-circle bg-primary text-white shadow-lg hover:bg-secondary transition-all"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;