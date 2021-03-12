import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container text-center">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Healthcare Disclaimer</li>
          <li>HIPPA Privacy Policy</li>
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
