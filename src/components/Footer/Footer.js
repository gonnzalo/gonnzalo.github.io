import React from "react"
import "./footer.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, code by&nbsp;
    <a href="https://github.com/gonnzalo" target="blank">
      gonnzalo
    </a>
  </footer>
)

export default Footer
