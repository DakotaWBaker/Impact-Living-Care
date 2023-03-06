import React from "react";
import pic from "./Assetts/homelesspicture.jpeg";

export default function AboutUs() {
  return (
    <div className="container-fluid">
    <div className="container">
      <div className="row pt-5">
        <div className="col text-center">
          <h2 className="decorated">
            <span>About us</span>
          </h2>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-xs-12 col-lg-6 text-center pb-5">
          <img src={pic} className="aboutPic" />
        </div>
        <div className="col text-xs-center pb-5">
          <div className="row">
            <div className="col">
              <h5><strong>I</strong> - Inspire </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5><strong>M</strong> - Motivate </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5><strong>P</strong> - Prosper </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5><strong>A</strong> - Amazing </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5><strong>C</strong> - Committed </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5><strong>T</strong> - Transform </h5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <h5><strong>IMPACT LIVING CARE</strong> is out of lafayette, La <br></br>
<strong>Our vision</strong> is to help provide a safe and comfortable place for individuals to live. As research and study shows affordable housing is a crisis around the world that leaves many helpless. That ranges within many demographics from all walks of life.  We are on a mission of <strong>IMPACT</strong> to get as many Homeless, Helpless, And hopeless people into housing so that they can live with peace again </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
