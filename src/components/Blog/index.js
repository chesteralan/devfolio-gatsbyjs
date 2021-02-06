import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query BloggerQuery {
    allBloggerPost(sort: {order: DESC, fields: published}, limit: 3) {
      posts: nodes {
        id
        title
        content
        featuredImage {
          url
        }
        labels
        url
        author {
          displayName
        }
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }  
  `)
    
  const { allBloggerPost: { posts } } = data;
  
    return (
        <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Blog
                </h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {posts.map(({ id, url, title, content, featuredImage: { url: imageUrl }, author: { displayName: authorName }, childMarkdownRemark: { excerpt } }) => {
              return (
            <div className="col-md-4" key={id}>
              <div className="card card-blog">
                <div className="card-img">
                  <a target="_blank" rel="noreferrer" href={url}><img src={imageUrl} alt="Blog Title" className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Travel</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a rel="noreferrer" target="_blank" href={url}>{title}</a></h3>
                  <p className="card-description">
{excerpt}
                  </p>
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </section>
    )
}
