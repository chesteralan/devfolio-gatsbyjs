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
    allDataJson(filter: {hero_title: {ne: null}, hero_subtitles: {elemMatch: {text: {ne: null}}}}) {
      nodes {
        hero_title
        hero_subtitles {
          text
        }
      }
    }
  }
  `)

  const { file: { publicURL } } = data;
  const { allDataJson: { nodes: [{ hero_title, hero_subtitles }] } } = data;
  const subtitles = hero_subtitles.map(s => s.text)
  
    return (
<div id="home" className="intro route bg-image" style={{backgroundImage: `url(${publicURL})`}}>
    <div className="overlay-itro"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          
          <h1 className="intro-title mb-4">{ hero_title }</h1>
          <Typed className="intro-subtitle" strings={subtitles} />
          
        </div>
      </div>
    </div>
  </div>
    )
}
