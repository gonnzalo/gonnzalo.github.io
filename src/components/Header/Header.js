import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./header.css"

const Header = props => {
  const { isHeaderActive } = props

  return (
    <header className={`${isHeaderActive ? "header-active" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <h1>
            <Link to="/" className="logo">
              WEB
            </Link>
          </h1>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <AnchorLink offset="100" href="#about" className="link-effect">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="100" href="#projects" className="link-effect">
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="100" href="#contact" className="link-effect">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
