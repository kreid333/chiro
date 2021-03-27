import React from "react"
import "./Operating.css"

const Operating = () => {
  return (
    <>
      <div className="row">
        {/* OUR LOCATION */}
        <div className="col-sm-6 text-center mb-3">
          <h2 className="m-3">Our Location</h2>
          <iframe
            title="Liberty County Clinic of Chiropractic Hinesville, GA Location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJR11Qx4Xj-ogREDTauArxjVA&key=AIzaSyD8lxU2exAcp_YzwHLTj6-oFeXhKQsEzp0"
          ></iframe>
        </div>

        {/* OFFICE HOURS */}
        <div className="col-sm-6 office-hours text-center mb-3">
          <h2 className="m-3">Office Hours</h2>
          <div>
            <h5>Monday - Wednesday - Thursday</h5>
            <p>
              9:00 AM - 1:00 PM <br />
              3:00 PM - 6:00 PM
            </p>
            <br />
            <h5>Tuesday</h5>
            <p>
              9:00 AM - 12:00 PM <br />
              3:00 PM - 6:00 PM
            </p>
            <br />
            <h5>Friday</h5>
            <p>9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Operating
