import React, { useEffect } from "react";
import "./Home.css";
import logo from "../../images/LCCC.png";
import drpeer from "../../images/drpeer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Operating from "../../components/Operating/Operating";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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
              width="100%"
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
                  <Link to="/services">
                    <h2>Chiropractic Care</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img corrective">
                  <Link to="/services">
                    <h2>Corrective Exercises</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 service-img lifestyle">
                  <Link to="/services">
                    <h2>Lifestyle Advice</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img spinal">
                  <Link to="/services">
                    <h2>Spinal and Posture Screenings</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEET THE DOCTOR */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="ml-3 mr-3 mt-3">Meet the Doctor</h1>
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
              <Link className="about-link d-block pt-1" to="/about">
                <span>
                  Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </p>
          </div>
          <div className="my-auto">
            <img className="p-3" src={drpeer} alt="Dr. David L Peer, D.C." />
          </div>
        </div>
        <Operating />
      </div>
    </div>
  );
};

export default Home;
