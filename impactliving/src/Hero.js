import React from 'react'
import hero from './Assetts/hero.jpg'

export default function Hero() {
  return (
    <div className="container-fluid heroContainer px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={hero}
        className="d-block mx-lg-auto img-fluid heroImg"
        alt="Bootstrap Themes"
        width={900}
        height={500}
        loading="lazy"
      />
    </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">
          Providing the best Assisted Living Services
        </h1>
        <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora non consequuntur exercitationem recusandae animi sapiente quis odio, reiciendis doloribus rerum asperiores ullam cumque quas excepturi nostrum incidunt, doloremque sed officia.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}
