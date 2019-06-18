import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faHackerrank,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./contact.css"
import ReactTooltip from "react-tooltip"

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2>Find my on</h2>
      <div className="icons-container">
        <a
          href="mailto:arecogonzalo@gmail.com"
          data-tip="contact me"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <ReactTooltip effect="solid" />
        </a>
        <a
          href="https://github.com/gonnzalo"
          data-tip="github"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <ReactTooltip effect="solid" />
        </a>
        <a href="/" data-tip="linkedin" data-place="bottom">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <ReactTooltip effect="solid" />
        </a>
        <a
          href="https://www.hackerrank.com/gonnzalo"
          data-tip="hacker rank"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faHackerrank} className="icon" />
          <ReactTooltip effect="solid" className="tooltip" />
        </a>
      </div>
    </section>
  )
}

export default Contact
