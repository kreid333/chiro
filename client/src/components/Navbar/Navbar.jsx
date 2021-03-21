import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinkCollapse = () => {
    const btn = document.querySelector(".navbar-toggler");
    const navbarContent = document.querySelector(".navbar-collapse");
    btn.classList.add("collapsed");
    navbarContent.classList.remove("show");
  };

  return (
    <nav className="navbar fixed-top navbar-expand-xl navbar-light shadow-sm">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/" onClick={navLinkCollapse}>
              Home
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/about" onClick={navLinkCollapse}>
              About
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link
              className="nav-link"
              to="/services"
              onClick={navLinkCollapse}
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
            >
              Services
            </Link>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">
                Chiropractic Care
              </Link>
              <Link className="dropdown-item" to="#">
                Corrective Exercises
              </Link>
              <Link className="dropdown-item" to="#">
                Lifestyle Advice
              </Link>
              <Link className="dropdown-item" to="#">
                Spinal and Posture Screenings
              </Link>
            </div> */}
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/faq" onClick={navLinkCollapse}>
              FAQ
            </Link>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link" href="#" onClick={navLinkCollapse}>
              Blog
            </a>
          </li>
          <li className="nav-item mr-5">
            <Link
              className="nav-link"
              to="/testimonials"
              onClick={navLinkCollapse}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/contact" onClick={navLinkCollapse}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://intake.mychirotouch.com/?clinic=LCCO0002"
              target="_blank"
              onClick={navLinkCollapse}
            >
              New Patient Intake Form
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
