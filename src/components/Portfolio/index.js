import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
  query PortfolioQuery {
    allFile(filter: {publicURL: {regex: "/work-(.*)/"}}) {
      nodes {
        publicURL
      }
    }
    allPortfolioJson {
      portfolios: nodes {
        title
        description
        category
        image_src
      }
    }
  }
  `)
    
  const { allFile: { nodes } } = data;
  const { allPortfolioJson: { portfolios } } = data;

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
{portfolios.map(({ title, category }) => (
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[0].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[0].publicURL} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{title}</h2>
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[1].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[1].publicURL} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Loreda Cuno Nere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[2].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[2].publicURL} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Mavrito Lana Dere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[3].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[3].publicURL} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Bindo Laro Cado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[4].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[4].publicURL} alt="" className="img-fluid"/>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Lena Mado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={nodes[5].publicURL} data-gall="portfolioGallery" className="venobox">
                  <div className="work-img">
                    <img src={nodes[5].publicURL} alt="" className="img-fluid"/>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Big Bang</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
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
  
          </div>
        </div>
      </section>
    )
}
