import React from "react";
import hero from "./Assetts/hero.jpeg";

export default function Hero({setPage}) {
  return (
    <div className="container-fluid heroContainer">
      <div className="row heroRow">
        <div className="col">
          <h1 className="text-center heroHeader">Impact Living Care</h1>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-center heroh4">Affordable shared housing</h4>
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
          <a href = '#contactScroll'><btn className = 'btn btn-primary'>Contact Us!</btn> </a>
          </div>
          <div className="col text-start">
            <btn className = 'btn btn-secondary' onClick={() => setPage("about")}>Learn more!<a href = '#contactScroll'></a></btn>
          </div>
        </div>
      </div>
    </div>
  );
}
