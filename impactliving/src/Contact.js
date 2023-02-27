import React from "react";
import email from "./Assetts/email.svg";

export default function Contact() {
  return (
    <div className="container-fluid" id="contactScroll">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-10">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="heading mb-4">Any other questions?</h1>
              <h5>
                Feel free to fill out the form and submit it, and we will get
                back to you as soon as possible!
              </h5>
              <p>
                <img src={email} alt="Image" className="img-fluid" />
              </p>
            </div>
            <div className="col-md-6">
              <form
                className="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                    <div
                      data-lastpass-icon-root="true"
                      style={{
                        position: "relative !important",
                        height: "0px !important",
                        width: "0px !important",
                        float: "left !important",
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control mt-2"
                      name="message"
                      id="message"
                      cols={30}
                      rows={7}
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary rounded-0 py-2 px-4"
                    />
                    <span className="submitting" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
