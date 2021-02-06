import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "../Nav"
import SEO from "../Seo"
import Footer from "../Footer"

import 'bootstrap/dist/css/bootstrap.css';
import '@icon/ionicons/ionicons.css';
import "./devfolio.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const { site: { siteMetadata: { title }}} = data;

  return (
    <>
      <SEO title={title} />
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
