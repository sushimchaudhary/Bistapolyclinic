 import React from 'react'
 import { Services } from './Javascript'
 function OurServices() {
   return (
     <>
       
 {/* Our Services */}
      <section>
        <div className="container py-5 text-center">
          <p className="text-primary fw-semibold mb-1">Our Services</p>
          <h2 className="fw-bold mb-3">Comprehensive Healthcare Services</h2>
          <p className="mb-5 px-2 px-md-5">
            We offer a wide range of medical services to meet all your
            healthcare needs. Our specialized departments provide comprehensive
            care with the latest medical technologies.
          </p>

          <div className="row g-4">
            {Services.map((Services, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="picc">
                    <img
                      src={Services.image}
                      alt={Services.title}
                      className="card-img-top img-fluid"
                    />
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">{Services.title}</h5>
                    <p className="card-text">{Services.description}</p>
                    <a
                      href={Services.link}
                      className="text-primary text-decoration-none"
                    >
                      Learn More <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-primary mt-5 px-4 py-2">
            View All Service
          </button>
        </div>
      </section>
     </>
   )
 }
 
 export default OurServices
 
 
 