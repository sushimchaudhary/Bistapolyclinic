// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { cardData } from "../Pages/Javascript";

// interface Service {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const AddServicesPage = () => {
//   const [servicesList, setServicesList] = useState<Service[]>([]);

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

//   return (
//     <>




//       <section>


//         <div className="container py-5">
//           <div className="row text-center">
//             <h2 className="mb-3 text-primary fw-bold">My Services</h2>
//             <p className="text-muted mb-5">
//               Comprehensive digital marketing solutions for your business
//             </p>
//           </div>
//           <Toaster position="top-right" />
//           <div className="row g-4">
//             {servicesList.map((item) => (
//               <div key={item._id} className="col-12 col-sm-6 col-lg-4">
//                 <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
//                   <div style={{ height: "250px", overflow: "hidden" }}>
//                     <img
//                       src={`http://localhost:5000${item.image}`}
//                       className="card-img-top w-100 h-100"
//                       alt={item.title}
//                       style={{
//                         objectFit: "cover",
//                         borderTopLeftRadius: "0.5rem",
//                         borderTopRightRadius: "0.5rem",
//                       }}
//                     />
//                   </div>
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title fw-semibold">{item.title}</h5>
//                     <p className="card-text text-muted" style={{ flexGrow: 1 }}>
//                       {item.description.length > 120
//                         ? item.description.slice(0, 120) + "..."
//                         : item.description}
//                     </p>
//                     <a
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn btn-success mt-3 w-30"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* My Services */}
//       <section>
//         <div className="container py-5">


//           <div className="row g-4 justify-content-center">
//             {cardData.map((card, index) => (
//               <div className="col-12 col-sm-6 col-lg-3" key={index}>
//                 <div
//                   className={`card h-100 text-center shadow-sm`}
//                   id="hoverCard"
//                 >
//                   <div className="card-body">
//                     <div className={`mb-3 fs-2 ${card.color}`}>
//                       <i className={`bi ${card.icon}`}></i>
//                     </div>
//                     <h5 className="card-title fw-bold">{card.title}</h5>
//                     <p className="card-text">{card.text}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>







//     </>
//   );
// };

// export default AddServicesPage;
// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import Link from "next/link";
// import { cardData } from "../Pages/Javascript";

// interface Service {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const ServicesPage = () => {
//   const [servicesList, setServicesList] = useState<Service[]>([]);

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

//   return (
//     <>
//       <section>
//         <div className="container py-5">
//           <div className="row text-center">
//             <h2 className="mb-3 text-primary fw-bold">My Services</h2>
//             <p className="text-muted mb-5">
//               Comprehensive digital marketing solutions for your business
//             </p>
//           </div>
//           <Toaster position="top-right" />
//           <div className="row g-4">
//             {servicesList.map((item) => (
//               <div key={item._id} className="col-12 col-sm-6 col-lg-4">
//                 <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
//                   <div style={{ height: "250px", overflow: "hidden" }}>
//                     <img
//                       src={`http://localhost:5000${item.image}`}
//                       className="card-img-top w-100 h-100"
//                       alt={item.title}
//                       style={{
//                         objectFit: "cover",
//                         borderTopLeftRadius: "0.5rem",
//                         borderTopRightRadius: "0.5rem",
//                       }}
//                     />
//                   </div>
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title fw-semibold">{item.title}</h5>
//                     <p className="card-text text-muted" style={{ flexGrow: 1 }}>
//                       {item.description.length > 120
//                         ? item.description.slice(0, 120) + "..."
//                         : item.description}
//                     </p>
//                     <Link
//                       href={`/Services/${item._id}`}
//                       className="btn btn-success mt-3 w-50 mx-auto"
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="container py-5">
//           <div className="row g-4 justify-content-center">
//             {cardData.map((card, index) => (
//               <div className="col-12 col-sm-6 col-lg-3" key={index}>
//                 <div className="card h-100 text-center shadow-sm">
//                   <div className="card-body">
//                     <div className={`mb-3 fs-2 ${card.color}`}>
//                       <i className={`bi ${card.icon}`}></i>
//                     </div>
//                     <h5 className="card-title fw-bold">{card.title}</h5>
//                     <p className="card-text">{card.text}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesPage;
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Service {
  _id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServicesPage = () => {
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const router = useRouter();

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

  const handleLearnMore = (id: string) => {
    router.push(`/Services/${id}`);
  };

  return (
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
          {servicesList.map((item) => (
            <div key={item._id} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                    {item.description.length > 120
                      ? item.description.slice(0, 120) + "..."
                      : item.description}
                  </p>
                  <button
                    className="btn btn-success mt-3"
                    onClick={() => handleLearnMore(item._id)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
