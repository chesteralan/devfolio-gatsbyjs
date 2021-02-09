import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
    query AboutQuery {
      file(relativePath: { eq: "testimonial-2.jpg" }) {
        publicURL
      }
      allDataJson(filter: {about_address: {ne: null}, about_email: {ne: null}, about_me: {ne: null}, about_name: {ne: null}, about_phone: {ne: null}, about_profile: {ne: null}, about_skills: {elemMatch: {name: {ne: null}}}, about_socialmedia: {elemMatch: {name: {ne: null}}}}) {
        nodes {
          about_address
          about_email
          about_me
          about_name
          about_phone
          about_profile
          about_skills {
            name
            percentage
            years
          }
          about_socialmedia {
            icon
            name
            url
          }
        }
      }
    }
    `)

    const { file: { publicURL } } = data;
    const { allDataJson: { nodes: [{ about_name, about_profile, about_email, about_phone, about_me }]}} = data;
    return (
        <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src={publicURL} className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>{about_name}</span></p>
                          <p><span className="title-s">Profile: </span> <span>{about_profile}</span></p>
                          <p><span className="title-s">Email: </span> <span>{about_email}</span></p>
                          <p><span className="title-s">Phone: </span> <span>{about_phone}</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="HTML"></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="CSS"></div>
                      </div>
                      <span>PHP</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '60%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="PHP"></div>
                      </div>
                      <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '60%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="JAVASCRIPT"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      {about_me}
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
