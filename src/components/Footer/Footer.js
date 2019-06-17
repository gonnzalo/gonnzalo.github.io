import React from "react"
import "./footer.css"
import { icon } from "@fortawesome/fontawesome-svg-core"
import Image from "../image"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Made by&nbsp;
    <a href="https://github.com/gonnzalo" target="blank">
      gonnzalo
    </a>
    &nbsp;using&nbsp;
    <div className="test">
      <Image imgName="gatsby-icon.png" />
    </div>
  </footer>
)

export default Footer
