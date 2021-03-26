import React from "react"
import "./Header.css"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="xl" fixed="top" className="shadow-sm navigation">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav mx-auto">
          <Link to="/" className="nav-link mr-5">
            Home
          </Link>
          <Link to="/about" className="nav-link mr-5">
            About
          </Link>
          <Link to="/services" className="nav-link mr-5">
            Services
          </Link>
          <Link to="/faq" className="nav-link mr-5">
            FAQ
          </Link>
          <Link to="/testimonials" className="nav-link mr-5">
            Testimonials
          </Link>
          <Link to="/contact" className="nav-link mr-5">
            Contact
          </Link>
          <Link
            to="https://intake.mychirotouch.com/?clinic=LCCO0002"
            className="nav-link"
            target="_blank"
          >
            New Patient Intake Form
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
