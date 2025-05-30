"use client";

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false); // 🟢 adminToken हटेपछि state पनि false मा सेट हुन्छ
  };

  return (
    <>
      {/* header section start */}
      <section className="bg-primary text-white py-2 sm_none">
        <div className="container mx-auto">
          <div className="row align-items-center justify-content-between text-center text-md-start">
            <div className="col-md-8 d-flex flex-column flex-md-row align-items-center gap-2 small">
              <span className="d-flex align-items-center">
                <FaClock className="me-1" /> Sun–Fri: 07:00AM - 6:00PM
              </span>
              <span className="d-flex align-items-center ms-md-3">
                <FaMapMarkerAlt className="me-1" /> New Baneshwor, Kathmandu
              </span>
              <span className="d-flex align-items-center ms-md-3">
                <FaEnvelope className="me-1" /> info@nepguru.com
              </span>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-3 mt-2 mt-md-0">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </section>

      {/* navbar start */}
      <nav className="navbar bg-light navbar-expand-lg py-3 border-top border-bottom sticky-top shadow">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand fw-bold" href="/">
            BISTA<span className="text-primary">POLICLINIC</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BISTA<span className="logo text-primary">POLICLINIC</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between w-100">
              <ul className="navbar-nav flex-grow-1 d-flex flex-column flex-lg-row gap-2 gap-lg-3 justify-content-lg-end align-items-lg-center mb-4 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Doctor">Doctors</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/News">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Contact">Contact</Link>
                </li>
              </ul>

              <div className="d-flex flex-column flex-sm-row gap-3 align-items-stretch align-items-sm-center">
                <Link href="/Appointment" className="text-decoration-none">
                  <button className="d-flex align-items-center gap-2 bg-primary text-white px-4 py-2 rounded border-0 w-100 w-sm-auto">
                    Appointment
                    <FaArrowRightLong className="text-lg" />
                  </button>
                </Link>

                {isAdmin && (
                  <>
                    <Link href="/dashboard" className="text-decoration-none">
                      <button className="bg-success text-white px-4 py-2 rounded border-0 w-100 w-sm-auto">
                        Dashboard
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
