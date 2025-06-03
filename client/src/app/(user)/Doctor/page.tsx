
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  education: string[];
  experience: string;
  service: string;
  bio: string;
  image: string;
}

const DoctorPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [showAll, setShowAll] = useState(false); // Toggle for View All

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.error("Failed to fetch doctors", err);
    }
  };

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 4);

  return (
    <div className="container py-5 bg-white">
      <h2 className="text-center text-primary fw-bold display-5 mb-4">
        👨‍⚕️ Meet Our Doctors
      </h2>
      <p className="text-center text-muted mb-5">
        Our team of dedicated healthcare professionals committed to providing
        you with exceptional care.
      </p>

      <div className="row g-4">
        {visibleDoctors.map((doc) => (
          <div key={doc._id} className="col-12 col-sm-6 col-md-4 col-lg-3">

            <div
              className="card border-0 rounded-4 overflow-hidden shadow doctor-card d-flex flex-column"
              style={{ height: "490px" }} // Set desired card height
            >
              <div className="overflow-hidden p-2" style={{
                height: "350px",
                overflow: "hidden",
              }}>
                <img
                  src={`http://localhost:5000${doc.image}`}
                  alt={doc.name}
                  className="card-img-top  doctor-img"
                 
                />

              </div>
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">{doc.name}</h5>
                <div className="mb-2">
                  {doc.education.map((edu, index) => (
                    <div key={index} className="text-danger small font-semibold">
                      {edu}
                    </div>
                  ))}
                </div>
                <p className="text-primary fw-semibold mb-1">{doc.specialization}</p>
                <p className="text-muted mb-1 small">{doc.service}</p>
                <p className="text-muted mb-1 small">{doc.experience}</p>
                <p
                  className="card-text text-truncate"
                  title={doc.bio}
                  style={{ maxHeight: "4.5em", overflow: "hidden" }}
                >
                  {doc.bio}
                </p>
                <div className="text-center mt-auto">
                  <Link
                    href={`/Doctor/${doc._id}`}
                    className="btn btn-primary w-30"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* View All button (shown only if more than 4 and not yet showing all) */}
      {!showAll && doctors.length > 4 && (
        <div className="text-center py-5">
          <Link href="/AllDoctors">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-300 rounded">
              Browse Doctors
            </button>
          </Link>

        </div>
      )}

      <style jsx>{`
        .doctor-img {
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default DoctorPage;
