import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <section id="contact" className="section-container">
      <h2 data-aos="fade-right">Find my on</h2>
      <div className="icons-container" data-aos="fade-left">
        <a
          href="mailto:arecogonzalo@gmail.com"
          data-tip="contact me"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <ReactTooltip className="tooltips" effect="solid" />
        </a>
        <a
          href="https://github.com/gonnzalo"
          data-tip="github"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <ReactTooltip className="tooltips" effect="solid" />
        </a>
        <a href="/" data-tip="linkedin" data-place="bottom">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <ReactTooltip className="tooltips" effect="solid" />
        </a>
        <a
          href="https://www.hackerrank.com/gonnzalo"
          data-tip="hacker rank"
          data-place="bottom"
        >
          <FontAwesomeIcon icon={faHackerrank} className="icon" />
          <ReactTooltip className="tooltips" effect="solid" />
        </a>
      </div>
    </section>
  )
}

export default Contact
