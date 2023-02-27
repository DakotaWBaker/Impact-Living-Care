import React from "react";
import hero from "./Assetts/hero.jpeg";

export default function Hero() {
  return (
    <div className="container-fluid heroContainer">
      <div className="row heroRow text-center">
        <div className="col">
          <h1>Impact Living Care</h1>
        </div>
        <div className="row text-center">
          <div className="col">
            <h4>Affordable shared housing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
