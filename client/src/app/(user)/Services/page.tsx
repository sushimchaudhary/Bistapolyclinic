
// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// interface Service {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const ServicesPage = () => {
//   const [servicesList, setServicesList] = useState<Service[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/services/all");
//       setServicesList(res.data);
//     } catch (err) {
//       console.error("Fetch services error", err);
//       toast.error("Could not load services");
//     }
//   };

//   const handleLearnMore = (id: string) => {
//     router.push(`/Services/${id}`);
//   };

//   return (
//     <section>
//       <Toaster position="top-right" />
//       <div className="container py-5">
//         <div className="row text-center mb-4">
//           <h2 className="text-primary fw-bold">My Services</h2>
//           <p className="text-muted">
//             Comprehensive digital marketing solutions for your business
//           </p>
//         </div>
//         <div className="row g-4">
//           {servicesList.map((item) => (
//             <div key={item._id} className="col-12 col-sm-6 col-lg-4">
//               <div className="card h-100 shadow-sm border-0">
//                 <div style={{ height: "250px", overflow: "hidden" }}>
//                   <img
//                     src={`http://localhost:5000${item.image}`}
//                     alt={item.title}
//                     className="card-img-top w-100 h-100"
//                     style={{
//                       objectFit: "cover",
//                       borderTopLeftRadius: "0.5rem",
//                       borderTopRightRadius: "0.5rem",
//                     }}
//                   />
//                 </div>
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title fw-semibold">{item.title}</h5>
//                   <p className="card-text text-muted" style={{ flexGrow: 1 }}>
//                     {item.description.length > 120
//                       ? item.description.slice(0, 120) + "..."
//                       : item.description}
//                   </p>
//                   <div className="mt-auto text-center">
//                     <Link href={`/Services/${item._id}`} className="btn btn-sm btn-primary">
//                       Read More
//                     </Link>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesPage;
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { cardData } from "../Pages/Javascript";

import { CalendarCheck, FileText, UserCog, Building2 } from "lucide-react";
interface Service {
  _id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const LimitedServicesPage = () => {
  const [servicesList, setServicesList] = useState<Service[]>([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/all");
      setServicesList(res.data);
    } catch (err) {
      console.error("Fetch services error", err);
      toast.error("Could not load services");
    }
  };

  const visibleServices = servicesList.slice(0, 3);

  return (
    <>
      <section>
        <Toaster position="top-right" />
        <div className="container py-5">
          <div className="row text-center mb-4">
            <h2 className="text-primary fw-bold">My Services</h2>
            <p className="text-muted">
              Comprehensive digital marketing solutions for your business
            </p>
          </div>
          <div className="row g-4">
            {visibleServices.map((item) => (
              <div key={item._id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-sm border-2">
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.title}
                      className="card-img-top w-100 h-100 rounded transition-transform duration-300 hover:scale-105"
                      style={{
                        objectFit: "cover",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">{item.title}</h5>
                    <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                      {item.description.length > 120
                        ? item.description.slice(0, 120) + "..."
                        : item.description}
                    </p>
                    <div className="mt-auto text-center">
                      <Link href={`/Services/${item._id}`} className="btn btn-sm btn-primary rounded py-2 px-4 fw-bold">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* My Services */}
      <section>
        <div className="container py-5">


          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-lg-3">
              <Link href="/Appointment" className="card h-100 text-center shadow-sm text-decoration-none" id="hoverCard">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-3">
                    <CalendarCheck className="text-blue-600 w-10 h-10" />
                  </div>
                  <h5 className="card-title fw-bold">Book Appointment</h5>
                  <p className="card-text mb-0" style={{ textDecoration: "none" }}>
                    Schedule a visit with our specialists
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <Link href="/Services" className="card h-100 text-center shadow-sm text-decoration-none" id="hoverCard">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-3">
                    <FileText className="text-green-600 w-10 h-10" />
                  </div>
                  <h5 className="card-title fw-bold">Our Services</h5>
                  <p className="card-text mb-0" style={{ textDecoration: "none" }}>
                    Explore our comprehensive care services
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <Link href="/Doctor" className="card h-100 text-center shadow-sm text-decoration-none" id="hoverCard">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-3">
                    <UserCog className="text-blue-600 w-10 h-10" />
                  </div>
                  <h5 className="card-title fw-bold">Our Doctors</h5>
                  <p className="card-text mb-0" style={{ textDecoration: "none" }}>
                    Meet our experienced specialists
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <Link href="/About" className="card h-100 text-center shadow-sm text-decoration-none" id="hoverCard">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-3">
                    <Building2 className="text-red-600 w-10 h-10" />
                  </div>
                  <h5 className="card-title fw-bold">About Clinic</h5>
                  <p className="card-text mb-0" style={{ textDecoration: "none" }}>
                    Learn about our facility and history
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {servicesList.length > 4 && (
            <div className="text-center mt-5">
              <Link href="/AllServices">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6  shadow-md transition duration-300 rounded">
                  Explore Services
                </button>
              </Link>
            </div>

          )}
        </div>
      </section >

    </>
  );
};

export default LimitedServicesPage;
