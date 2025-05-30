// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface Doctor {
//   _id: string;
//   name: string;
//   specialization: string;
//   education: string[];
//   experience: string;
//   bio: string;
//   image: string;
// }

// const DoctorPage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/doctors");
//       setDoctors(res.data);
//     } catch (err) {
//       console.error("Failed to fetch doctors", err);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
//       <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-4">
//         👨‍⚕️ Meet Our Doctors
//       </h2>
//       <p className="mb-10 text-center text-gray-600">
//         Our team of dedicated healthcare professionals is committed to providing
//         you with exceptional care.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {doctors.map((doc) => (
//           <div
//             key={doc._id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
//           >
//             <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
//               <img
//                 src={`http://localhost:5000${doc.image}`}
//                 alt={doc.name}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             <div className="card-body flex flex-col">
//               <h3 className="card-title text-xl font-semibold text-gray-900">
//                 {doc.name}
//               </h3>
//               <p className="text-blue-600 font-medium">{doc.specialization}</p>
//               <p className="text-sm text-gray-500">{doc.experience}</p>
//               <p className="card-text text-sm text-gray-700 mt-2 line-clamp-3">
//                 {doc.bio}
//               </p>

//               <div className="mt-2 space-y-1">
//                 {doc.education.map((edu, index) => (
//                   <div
//                     key={`edu-${doc._id}-${index}`}
//                     className="text-red-500 text-xs"
//                   >
//                     🎓 {edu}
//                   </div>
//                 ))}
//               </div>

//               <Link href={`/Doctor/${doc._id}`} className="mt-4">
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-lg transition">
//                   Learn More
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorPage;

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

const DoctorPage = () => {
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
    <div className="container py-5 bg-white">
      <h2 className="text-center text-primary fw-bold display-5 mb-4">
        👨‍⚕️ Meet Our Doctors
      </h2>
      <p className="text-center text-muted mb-5">
        Our team of dedicated healthcare professionals committed to providing
        you with exceptional care.
      </p>

      <div className="row g-4">
        {doctors.map((doc) => (
          <div key={doc._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow doctor-card">
              <div className="overflow-hidden p-2">
                <img
                  src={`http://localhost:5000${doc.image}`}
                  alt={doc.name}
                  className="card-img-top img-fluid doctor-img"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    // transition: "transform 0.4s ease",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{doc.name}</h5>
                <p className="text-primary fw-semibold mb-1">
                  {doc.specialization}
                </p>
                <p className="text-muted mb-2 small">{doc.experience}</p>
                <p
                  className="card-text text-truncate"
                  title={doc.bio}
                  style={{ maxHeight: "4.5em", overflow: "hidden" }}
                >
                  {doc.bio}
                </p>

                <div className="mb-3">
                  {doc.education.map((edu, index) => (
                    <div key={index} className="text-danger small">
                      {edu}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-auto">
                  <a
                    href={`/Doctor/${doc._id}`}
                    className="btn btn-primary w-30"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .doctor-img {
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default DoctorPage;
