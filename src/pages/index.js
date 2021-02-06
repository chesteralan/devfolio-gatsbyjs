import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Counter from "../components/Counter"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Counter />
    <Portfolio />
    <Testimonials />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
