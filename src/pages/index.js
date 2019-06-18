import React from "react"

import "normalize.css"

import Layout from "../components/layout"

import SEO from "../components/seo"
import About from "../sections/About/About"
import Contact from "../sections/Contact/Contact"
import Landing from "../sections/Landing/Landing"
import Projects from "../sections/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
