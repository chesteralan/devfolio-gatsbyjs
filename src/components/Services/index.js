import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
  query ServicesQuery {
    allDataJson {
      nodes {
        services {
          description
          icon
          name
        }
      }
    }
  }  
  `)

  const { allDataJson: { nodes: { services } } } = data;

    return (
<section id="service" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Services
              </h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
{ services.map(({name, description, icon}) => (
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className={icon}></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">{name}</h2>
                <p className="s-description text-center">
                {description}
                </p>
              </div>
            </div>
          </div>
  ))
}
         </div>
      </div>
    </section>
    )
}
