import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Typed from '../Typed'

import './hero.module.css'

export default () => {
  const data = useStaticQuery(graphql`
  query HeroQuery {
    file(relativePath: { eq: "intro-bg.png" }) {
      publicURL
    }
  }  
  `)

  const { file: { publicURL } } = data;

    return (
<div id="home" className="intro route bg-image" style={{backgroundImage: `url(${publicURL})`}}>
    <div className="overlay-itro"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          
          <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
          <Typed className="intro-subtitle" strings={[
            'CEO DevFolio',
            'Web Developer',
            'Web Designer',
            'Frontend Developer',
            'Graphic Designer'
          ]} />
          
        </div>
      </div>
    </div>
  </div>
    )
}
