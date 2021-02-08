import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
  query PortfolioQuery {
    allDataJson(filter: {portfolio: {elemMatch: {name: {ne: null}}}}) {
      nodes {
        portfolio {
          category
          description
          name
        }
      }
    }
  }
  `)
    
  const { allDataJson: { nodes: [{ portfolio: portfolios }] } } = data;

    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Portfolio
                </h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
{portfolios.map(({ name, category }) => (
            <div className="col-md-4">
              <div className="work-box">
                <a href="#" data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src="" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{name}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{category}</span> / <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
))}
            </div>
        </div>
      </section>
    )
}
