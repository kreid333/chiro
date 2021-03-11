import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../images/LCCC.png";
import backontrac from "../../images/back-on-trac.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
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
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3">
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
      </div>
    </div>
  );
};

export default Home;
