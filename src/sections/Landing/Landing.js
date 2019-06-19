import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./landing.css"

const Landing = () => {
  return (
    <section id="home" className="landing-page">
      <div className="home-container">
        <h1>G Lorem, ipsum dolor sit amet consectetur</h1>
      </div>
      <AnchorLink offset="100" href="#projects">
        <span></span>
      </AnchorLink>
    </section>
  )
}

export default Landing
