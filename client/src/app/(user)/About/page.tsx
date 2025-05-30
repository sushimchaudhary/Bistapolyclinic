// // 'use client'
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { welcomeData } from "../Pages/Javascript";
// // function Page() {
// //   const [slides, setSlides] = useState([]);
// //   const [expanded, setExpanded] = useState(false);
// //   const toggleText = () => setExpanded(!expanded);


// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/about-sliders") // ensure this is your route
// //       .then((res) => {
// //         console.log(res.data);
// //         setSlides(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);



// //   return (

// //     <section>
// //       <div className="container py-5">
// //         <div className="row align-items-center bg-white shadow rounded-4 p-4 g-3 justify-content-between">
// //           {/* Image Section */}
// //           <div className="col-lg-6 mb-4 mb-lg-0">
// //             <div
// //               id="carouselAutoplay"
// //               className="carousel slide"
// //               data-bs-ride="carousel"
// //             >
// //               <div className="carousel-inner">
// //                 {slides.length > 0 ? (
// //                   slides.map((slide, index) => (
// //                     <div
// //                       key={slide._id || index}
// //                       className={`carousel-item ${index === 0 ? "active" : ""}`}
// //                     >
// //                       <img
// //                         src={slide.imageUrl}
// //                         className="d-block w-100"
// //                         alt={`Slide ${index + 1}`}
// //                       />
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <div className="text-muted">No slides found.</div>
// //                 )}
// //               </div>
// //               {slides.length > 1 && (
// //                 <>
// //                   <button
// //                     className="carousel-control-prev"
// //                     type="button"
// //                     data-bs-target="#carouselAutoplay"
// //                     data-bs-slide="prev"
// //                   >
// //                     <span className="carousel-control-prev-icon" />
// //                   </button>
// //                   <button
// //                     className="carousel-control-next"
// //                     type="button"
// //                     data-bs-target="#carouselAutoplay"
// //                     data-bs-slide="next"
// //                   >
// //                     <span className="carousel-control-next-icon" />
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //           {/* Text Section */}
// //           <div className="col-12 col-lg-6 text-center text-lg-start">
// //             <div className="d-flex flex-column flex-md-row justify-between align-items-center gap-3">
// //               <h2 className="fw-bold m-0 text-center text-md-start">
// //                 {welcomeData.title}
// //               </h2>

// //               <div className="bg-success text-white rounded-4 shadow-sm py-2 px-4 text-center">
// //                 <div className="fw-bold fs-3">20+</div>
// //                 <div className="fw-semibold small">Years Of Experience</div>
// //               </div>
// //             </div>
// //             <hr className="mx-auto mx-lg-0" />

// //             {/* Responsive text logic */}
// //             <p className="text-muted d-lg-none">
// //               {expanded
// //                 ? welcomeData.intro + " " + welcomeData.details
// //                 : welcomeData.intro.slice(0, 80) + "..."}
// //             </p>

// //             {/* Full text always visible on large screens */}
// //             <div className="text-muted d-none d-lg-block">
// //               <p>{welcomeData.intro}</p>
// //               <p>{welcomeData.details}</p>
// //             </div>

// //             {/* Toggle button only for small screens */}
// //             <div className="d-lg-none">
// //               <button
// //                 className="btn btn-link p-0 text-primary"
// //                 onClick={toggleText}
// //               >
// //                 {expanded ? "See Less" : "See More"}
// //               </button>
// //             </div>

// //             {/* <button className="btn btn-primary mt-3 px-4">
// //                 {welcomeData.buttonText}
// //               </button> */}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Page;

// 'use client';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { welcomeData } from "../Pages/Javascript";

// function Page() {
//   const [slides, setSlides] = useState([]);
//   const [expanded, setExpanded] = useState(false);
//   const toggleText = () => setExpanded(!expanded);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/about-sliders")
//       .then((res) => {
//         console.log(res.data);
//         setSlides(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>

//     {/* // About section start */}
//     <section>
//       <div className="container py-5 justify-content-between">
//         <div className="row align-items-center bg-white shadow rounded-4 p-4 justify-content-between">
//           {/* Image Section */}
//           {/* <div className="col-lg-6 mb-4 mb-lg-0">
//             <div
//               id="carouselAutoplay"
//               className="carousel slide"
//               data-bs-ride="carousel"
//               data-bs-interval="2000" // 5-second autoplay
//             >
//               <div className="carousel-inner">
//                 {slides.length > 0 ? (
//                   slides.map((slide, index) => (
//                     <div
//                       key={slide._id || index}
//                       className={`carousel-item ${index === 0 ? "active" : ""}`}
//                     >
//                       <img
//                         src={slide.imageUrl}
//                         alt={`Slide ${index + 1}`}
//                         className="d-block w-100"
//                         style={{
//                           width: "100%",
//                           height: "400px",
//                           objectFit: "contain",
//                           objectPosition: "center",
//                           backgroundColor: "#f8f9fa", // optional: improves appearance with transparent or small images
//                           borderRadius: "12px"
//                         }}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-muted">No slides found.</div>
//                 )}
//               </div>

//               {slides.length > 1 && (
//                 <>
//                   <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#carouselAutoplay"
//                     data-bs-slide="prev"
//                   >
//                     <span className="carousel-control-prev-icon" />
//                   </button>
//                   <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#carouselAutoplay"
//                     data-bs-slide="next"
//                   >
//                     <span className="carousel-control-next-icon" />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div> */}
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div
//               id="carouselAutoplay"
//               className="carousel slide h-100"
//               data-bs-ride="carousel"
//               data-bs-interval="5000" // 5-second autoplay
//             >

//               <div
//                 className="carousel-inner"
//                 style={{ height: "400px" }}  // fixed height for the inner container
//               >
//                 {slides.length > 0 ? (
//                   slides.map((slide, index) => (
//                     <div
//                       key={slide._id || index}
//                       className={`carousel-item ${index === 0 ? "active" : ""}`}
//                       style={{ height: "100%" }}  // full height of carousel-inner
//                     >
//                       <img
//                         src={slide.imageUrl}
//                         alt={`Slide ${index + 1}`}
//                         className="d-block w-100"
//                         style={{
//                           height: "100%",           // full height of carousel-item
//                           objectFit: "cover",
//                           objectPosition: "center",
//                           backgroundColor: "#f8f9fa",
//                           borderRadius: "12px",
//                         }}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-muted">No slides found.</div>
//                 )}
//               </div>

//               {slides.length > 1 && (
//                 <>
//                   <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#carouselAutoplay"
//                     data-bs-slide="prev"
//                   >
//                     <span className="carousel-control-prev-icon" />
//                   </button>
//                   <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#carouselAutoplay"
//                     data-bs-slide="next"
//                   >
//                     <span className="carousel-control-next-icon" />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>


//           {/* Text Section */}
//           <div className="col-12 col-lg-6 text-center text-lg-start">
//             <div className="d-flex flex-column flex-md-row justify-between align-items-center gap-3">
//               <h2 className="fw-bold m-0 text-center text-md-start">
//                 {welcomeData.title}
//               </h2>

//               <div className="bg-success text-white rounded-4 shadow-sm py-2 px-4 text-center">
//                 <div className="fw-bold fs-3">20+</div>
//                 <div className="fw-semibold small">Years Of Experience</div>
//               </div>
//             </div>
//             <hr className="mx-auto mx-lg-0" />

//             {/* Responsive text logic */}
//             <p className="text-muted d-lg-none">
//               {expanded
//                 ? welcomeData.intro + " " + welcomeData.details
//                 : welcomeData.intro.slice(0, 80) + "..."}
//             </p>

//             {/* Full text always visible on large screens */}
//             <div className="text-muted d-none d-lg-block">
//               <p>{welcomeData.intro}</p>
//               <p>{welcomeData.details}</p>
//             </div>

//             {/* Toggle button only for small screens */}
//             <div className="d-lg-none">
//               <button
//                 className="btn btn-link p-0 text-primary"
//                 onClick={toggleText}
//               >
//                 {expanded ? "See Less" : "See More"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     </>
//   );
// }


// export default Page;

'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { welcomeData } from "../Pages/Javascript";

function Page() {
  const [slides, setSlides] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const toggleText = () => setExpanded(!expanded);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/about-sliders")
      .then((res) => {
        setSlides(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="container py-5 justify-content-between">
        <div className="row align-items-center bg-white shadow rounded-4 p-4 justify-content-between">
          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              id="carouselAutoplay"
              className="carousel slide h-100"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              {/* Dot Indicators */}
              {slides.length > 1 && (
                <div className="carousel-indicators mb-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselAutoplay"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                      style={{ width: "12px", height: "12px", borderRadius: "50%" }}
                    />
                  ))}
                </div>
              )}

              <div
                className="carousel-inner"
                style={{ height: "400px" }}
              >
                {slides.length > 0 ? (
                  slides.map((slide, index) => (
                    <div
                      key={slide._id || index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      style={{ height: "100%" }}
                    >
                      <img
                        src={slide.imageUrl}
                        alt={`Slide ${index + 1}`}
                        className="d-block w-100"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-muted">No slides found.</div>
                )}
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="d-flex flex-column flex-md-row justify-between align-items-center gap-3">
              <h2 className="fw-bold m-0 text-center text-md-start">
                {welcomeData.title}
              </h2>

              <div className="bg-success text-white rounded-4 shadow-sm py-2 px-4 text-center">
                <div className="fw-bold fs-3">20+</div>
                <div className="fw-semibold small">Years Of Experience</div>
              </div>
            </div>
            <hr className="mx-auto mx-lg-0" />

            {/* Responsive text logic */}
            <p className="text-muted d-lg-none">
              {expanded
                ? welcomeData.intro + " " + welcomeData.details
                : welcomeData.intro.slice(0, 80) + "..."}
            </p>

            {/* Full text always visible on large screens */}
            <div className="text-muted d-none d-lg-block">
              <p>{welcomeData.intro}</p>
              <p>{welcomeData.details}</p>
            </div>

            {/* Toggle button only for small screens */}
            <div className="d-lg-none">
              <button
                className="btn btn-link p-0 text-primary"
                onClick={toggleText}
              >
                {expanded ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
