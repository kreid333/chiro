import { Link } from "gatsby"
import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container text-center">
        <ul className="footer-links">
          <div className="row">
            <div className="col-sm-3">
              <li className="foot-link"><Link to="/privacy-policy">Privacy Policy</Link></li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link"><Link to="/terms-of-service">Terms of Service</Link></li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link">
                <Link to="/health-disclaimer">Healthcare Disclaimer</Link>
              </li>
            </div>
            <div className="col-sm-3">
              <li className="foot-link">
                <Link to="/hippa-privacy-policy">HIPPA Privacy Policy</Link>
              </li>
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
  )
}

export default Footer
