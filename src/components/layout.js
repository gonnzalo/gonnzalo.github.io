import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [isHeaderActive, setHeaderActive] = useState(false)
  const [currentLink, setcurrentLink] = useState(-1)
  const mainRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300
      const linksArray = mainRef.current.children
      Array.from(linksArray).forEach((e, i) => {
        if (i < 3 && window.scrollY > 10) {
          if (
            scrollPosition > e.offsetTop &&
            scrollPosition < linksArray[i + 1].offsetTop
          ) {
            setcurrentLink(i)
          }
        } else if (scrollPosition >= linksArray[3].offsetTop) {
          setcurrentLink(i)
        }
      })
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
      <Header isHeaderActive={isHeaderActive} currentLink={currentLink} />
      <div>
        <main ref={mainRef}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
