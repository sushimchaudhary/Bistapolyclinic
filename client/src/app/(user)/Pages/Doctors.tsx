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
  bio: string;
  image: string;
}

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

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

  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center text-primary fw-bold display-5 mb-4">
        👨‍⚕️ Meet Our Doctors
      </h2>
      <p className="text-center text-muted mb-5">
        Our team of dedicated healthcare professionals committed to providing you with exceptional care.
      </p>

      <div className="row g-4">
        {doctors.map((doc) => (
          <div key={doc._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 rounded overflow-hidden doctor-card">
              <div className="overflow-hidden">
                <img
                  src={`http://localhost:5000${doc.image}`}
                  alt={doc.name}
                  className="card-img-top img-fluid doctor-img p-2 radius"
                  style={{ height: '220px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{doc.name}</h5>
                <p className="text-primary fw-semibold mb-1">{doc.specialization}</p>
                <p className="text-muted mb-2 small">{doc.experience}</p>
                <p className="card-text text-truncate" title={doc.bio} style={{ maxHeight: '4.5em', overflow: 'hidden' }}>
                  {doc.bio}
                </p>

                <div className="mb-3">
                  {doc.education.map((edu, index) => (
                    <div key={index} className="text-danger small">
                      {edu}
                    </div>
                  ))}
                </div>

                <a href={`/doctors/${doc._id}`} className="btn btn-primary mt-auto w-100">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
    
    .doctor-card:hover {
      box-shadow: 0 1rem 2rem rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease;
    }
  `}
      </style>
    </div>

  );
};

export default Doctors;
