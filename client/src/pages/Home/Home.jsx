import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../images/LCCC.png";
import drpeer from "../../images/drpeer.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="hero">
        <div className="logo-bg">
          <div className="logo">
            <img
              className="main-image mb-3"
              src={logo}
              alt="Liberty County Clinic of Chiropractor"
            />
            <h5>211 E. Memorial Drive</h5>
            <h5>Hinesville, GA 31313</h5>
            <h5>
              Phone: <a href="tel:9123684002">(912) 368-4002</a>
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        {/* BACK ON TRAC */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mt-5 mb-5">
              Now offering the State-of-the-Art Back on Trac System
            </h1>
            <iframe
              allowtransparency="true"
              title="Wistia video player"
              allowFullscreen
              frameborder="0"
              scrolling="no"
              class="wistia_embed"
              name="wistia_embed"
              src="https://fast.wistia.net/embed/iframe/yhlgpwxnhd"
              width="600"
              height="337.5"
            ></iframe>
          </div>
        </div>

        {/* SERVICES */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3">Services</h1>
            <div className="services">
              <div className="row">
                <div className="col-sm-6 service-img chiro">
                  <h2>Chiropractic Care</h2>
                </div>
                <div className="col-sm-6 service-img corrective">
                  <h2>Corrective Exercises</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 service-img lifestyle">
                  <h2>Lifestyle Advice</h2>
                </div>
                <div className="col-sm-6 service-img spinal">
                  <h2>Spinal and Posture Screenings</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEET THE DOCTOR */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3">Meet the Doctor</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 my-auto text-center">
            <p className="bio p-3">
              Dr. David L Peer, D.C., received his Doctor of Chiropractic degree
              from Life University and was recognized for his clinical
              excellence. He is certified by the National Board of Chiropractic
              Examiners and is adequately trained in a variety of techniques
              that allow our office to treat patients of all ages. We are injury
              specialists, whether due to an accident or sports related.
            </p>
          </div>
          <div className="my-auto">
            <img className="p-3" src={drpeer} alt="Dr. David L Peer, D.C." />
          </div>
        </div>

        <div className="row">
          {/* OUR LOCATION */}
          <div className="col-sm-6 text-center mb-3">
            <h2 className="m-3">Our Location</h2>
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
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
      </div>
    </div>
  );
};

export default Home;
