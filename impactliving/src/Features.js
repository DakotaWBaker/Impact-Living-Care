import React from "react";
import utilities from './Assetts/bill.png'
import furnished from './Assetts/cabinet.png'
import cameras from './Assetts/security-camera.png'
import washer from './Assetts/washer-machine.png'
import appliances from './Assetts/electric-appliance.png'
import internet from './Assetts/tv.png'

export default function Features() {
  return (
    <div className="container-fluid featuresContainer">
      <div className="row pt-3">
        <div className="col text-center">
          <h1>Homes and facilities features</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={utilities} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">All utilities paid</h5>
  </div>
</div> 
        </div>
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={furnished} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Fully furnished</h5>
  </div>
</div> 
        </div>
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={cameras} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Security Cameras</h5>
  </div>
</div> 
        </div>
      </div>
      <div className="row cardRow pb-5 justify-content-center">
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={washer} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Washer and Dryer</h5>
  </div>
</div> 
        </div>
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={appliances} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">All appliances</h5>
  </div>
</div> 
        </div>
        <div className="col mt-3 featuresCol">
        <div className="card mx-auto mt-2" style={{ width: "18rem" }}>
  <img src={internet} className="card-img-top mx-auto mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Internet and cable</h5>
  </div>
</div> 
        </div>
      </div>
    </div>
  );
}
