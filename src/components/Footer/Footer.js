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
          <Image imgName="gatsby-icon.png" />
        </div>
      </span>
    </div>
  </footer>
)

export default Footer
