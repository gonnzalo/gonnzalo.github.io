import { Link } from "gatsby"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"
import "./header.css"

const Header = props => {
  const { isHeaderActive, currentLink } = props

  return (
    <header className={`${isHeaderActive ? "header-active" : ""}`}>
      <div
        className={`${
          isHeaderActive
            ? "nav-container nav-container-active"
            : "nav-container"
        }`}
      >
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
              <AnchorLink
                offset="100"
                href="#home"
                className={`${
                  currentLink === 0 ? "link-effect link-active" : "link-effect"
                }`}
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="100"
                href="#about"
                className={`${
                  currentLink === 1 ? "link-effect link-active" : "link-effect"
                }`}
              >
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="100"
                href="#projects"
                className={`${
                  currentLink === 2 ? "link-effect link-active" : "link-effect"
                }`}
              >
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="100"
                href="#contact"
                className={`${
                  currentLink === 3 ? "link-effect link-active" : "link-effect"
                }`}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  isHeaderActive: PropTypes.bool.isRequired,
  currentLink: PropTypes.number.isRequired,
}

export default Header
