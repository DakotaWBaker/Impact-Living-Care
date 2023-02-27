import React from "react";
import homeless from "./Assetts/homelesspicture.jpg";
import homeless2 from "./Assetts/homelessperson.jpeg";
import homeless3 from "./Assetts/feedinghomeless.jpeg";
import arrow from "./Assetts/arrow.png";
import Contact from "./Contact";

export default function Mission() {
  return (
    <div className="container-fluid missionContainer" id="missionScroll">
      <div className="row mb-5 pt-5">
        <div className="col text-center">
          <h2 className="decorated">
            <span>AT IMPACT LIVING CARE</span>
          </h2>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col text-center">
          <div className="row">
            <div className="col">
              <img src={homeless} className="missionPictures" />
            </div>
          </div>
          <div className="row missionHeaders">
            <div className="col">
              <h3>
                {" "}
                <span className="missionSpan">Who We Serve:</span>
              </h3>
            </div>
          </div>
          <div className="row missionHeaders">
            <div className="col">
              <div className="row mt-5">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>Sobriety</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>Veterans</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>Homeless</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>Mentally Ill</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>Low Income</h5>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 text-end">
                  <img className="bullets" src={arrow} />
                </div>
                <div className="col text-start">
                  <h5>And more..</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <img src={homeless2} className="missionPictures" />
          <div className="row missionHeaders">
            <div className="col">
              <h3>
                {" "}
                <span className="missionSpan">Our Mission:</span>
              </h3>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-start">
              <h5 className="missionParas mb-4">
                is to provide care and support for the homeless and those in
                need. We believe that everyone deserves to be treated with
                respect and dignity, and we strive to create an environment
                where everyone feels welcome and valued. Through our housing
                services, we work to provide physical, emotional, and spiritual
                needs of those in need, empowering them to regain stability in
                society. To find hope, meaning, and purpose in their lives.
              </h5>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <img src={homeless3} className="missionPictures" />
          <div className="row missionHeaders">
            <div className="col">
              <h3>
                {" "}
                <span className="missionSpan">Our Goal:</span>
              </h3>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-start">
              <h5 className="missionParas">
                {" "}
                Is not to just provide housing to those in need but in addition
                focus on three pillars .BODY, MIND, AND SPIRIT. To allow each
                individual to sustain a more healthier journey. To cultivate a
                more stable mind set. Lastly to reassure anyone that you are
                still a light no matter how dark your life has been.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
