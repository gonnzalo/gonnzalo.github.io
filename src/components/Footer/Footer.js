import React from "react"
import "./footer.css"
import Image from "../image"

const Footer = () => (
  <footer>
    <div className="footer-text">
      © {new Date().getFullYear()} Made by&nbsp;
      <a href="https://github.com/gonnzalo" target="blank">
        gonnzalo
      </a>
      <span>
        {" "}
        &nbsp;using&nbsp;
        <div className="gatsby-icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gatsbyjs.org/"
          >
            <Image imgName="gatsby-icon.png" />
          </a>
        </div>
      </span>
    </div>
  </footer>
)

export default Footer
