import React from "react"
import Header from "./Navbar/Header"
import Footer from "./Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/montserrat"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
