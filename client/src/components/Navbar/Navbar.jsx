import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow-sm">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item mr-5 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              Testamonials
            </a>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              New Patient Form
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
