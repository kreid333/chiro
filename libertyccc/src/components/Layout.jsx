import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fontsource/montserrat"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
