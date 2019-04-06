import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="nav-container">
      <div className="logo">
        <h1>
          <Link to="/">WEB</Link>
        </h1>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
