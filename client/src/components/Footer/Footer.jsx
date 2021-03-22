import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container text-center">
        <ul className="footer-links">
          <div className="row">
            <div className="col-sm-3">
              <li className="foot-link">Privacy Policy</li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link">Terms of Service</li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link">Healthcare Disclaimer</li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link">HIPPA Privacy Policy</li>
            </div>
          </div>
        </ul>
        <h5 className="light-text">Liberty County Clinic of Chiropractic</h5>
        <div className="contact light-text mb-2 mt-2">
          <span>211 E. Memorial Drive</span>
          <span>Hinesville, GA 31313</span>
          <span>
            Phone: <a href="tel:9123684002">(912) 368-4002</a>
          </span>
        </div>
        <small>&copy;2021, Kai Reid</small>
      </div>
    </footer>
  );
};

export default Footer;
