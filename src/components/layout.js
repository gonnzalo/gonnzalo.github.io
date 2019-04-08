import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [isHeaderActive, setHeaderActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 10
        ? setHeaderActive(true)
        : setHeaderActive(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <Header isHeaderActive={isHeaderActive} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
