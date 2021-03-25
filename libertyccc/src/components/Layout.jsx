import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
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