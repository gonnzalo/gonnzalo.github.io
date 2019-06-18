import React from "react"
import "./footer.css"
import Image from "../image"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Made by&nbsp;
    <a href="https://github.com/gonnzalo" target="blank">
      gonnzalo
    </a>
    &nbsp;using&nbsp;
    <div className="gatsby-icon">
      <Image imgName="gatsby-icon.png" />
    </div>
  </footer>
)

export default Footer
