import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="m-4 text-center">Contact</h1>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email-address">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-address"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label for="phone-number">Phone Number</label>
                  <input
                    type="input"
                    className="form-control"
                    id="phone-number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label for="textarea-1">Message</label>
                  <textarea
                    className="form-control"
                    id="textarea-1"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="submitBtn mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
