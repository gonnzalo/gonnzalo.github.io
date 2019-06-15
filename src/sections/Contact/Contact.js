import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {
  faHackerrank,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./contact.css"

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2>Find my on</h2>
      <div className="icons-container">
        <a href="">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faHackerrank} className="icon" />
        </a>
      </div>
    </section>
  )
}

export default Contact
