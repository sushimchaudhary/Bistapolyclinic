import React from 'react'
import { cardData } from "./Javascript";

function Services() {
  return (
    <>

      {/* My Services */}
      <section>
        <div className="container py-5">
          <div className="row text-center">
            <h2 className="mb-3 text-primary fw-bold">My Services</h2>
            <p className="text-muted mb-5">
              Comprehensive digital marketing solutions for your business
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {cardData.map((card, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <div
                  className={`card h-100 text-center shadow-sm`}
                  id="hoverCard"
                >
                  <div className="card-body">
                    <div className={`mb-3 fs-2 ${card.color}`}>
                      <i className={`bi ${card.icon}`}></i>
                    </div>
                    <h5 className="card-title fw-bold">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
