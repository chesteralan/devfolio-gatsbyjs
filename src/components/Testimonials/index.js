import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {

  const data = useStaticQuery(graphql`
  query TestimonialsQuery {
    file(relativePath: { eq: "overlay-bg.jpg" }) {
      publicURL
    }
    allFile(filter: {publicURL: {regex: "/testimonial-(.*)/"}}) {
      nodes {
        publicURL
      }
    }
  }  
  `)

  const { allFile:{ nodes },file: { publicURL } } = data;

    return (
        <>
        <div id="testimonials" className="testimonials paralax-mf bg-image" style={{ backgroundImage: `url(${publicURL})`}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider arrows={false} id="testimonial-mf">
              <div className="testimonial-box">
                <div className="author-test">
                  <img src={nodes[0].publicURL} alt="" className="rounded-circle b-shadow-a"/>
                  <span className="author">Xavi Alonso</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="ion ion-thumbs-up"></i></span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="author-test">
                  <img src={nodes[1].publicURL} alt="" className="rounded-circle b-shadow-a"/>
                  <span className="author">Marta Socrate</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="ion ion-thumbs-up"></i></span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
