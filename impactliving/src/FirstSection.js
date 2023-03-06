import React from "react";

export default function FirstSection() {
  return (
    <div className="container-fluid firstSection" id="aboutScroll">
      <div className="row missionHeader justify-content-center">
        <div className="col-xs-12 col-md-6 text-center">
          <h1><p className = 'firstSectionSpan'>Housing can be a start to a new beginning!</p></h1>
        </div>
      </div>
      <div className="row missionPara text-center">
        <div className="col">
          <h5>
            We believe that everyone deserves a safe and affordable place to
            call home, regardless of their situation. We offer housing to many
            demographics such as homelessness, veterans, struggling with drug
            addiction, low-income, mental health and much more. We are seeking
            to provide a sense of community and belonging while helping
            individuals get back on their feet. We offer short-term and long
            term shared transitional housing. Here to serve our community and
            create a major IMPACT while doing so.
          </h5>
        </div>
      </div>
    </div>
  );
}
