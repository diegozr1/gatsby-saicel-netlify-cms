import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Button } from "..";
import { ArrowBottom } from "../../img";
import "./PatologiesRoll.css";
class PatologiesRoll extends React.Component {
  render() {
    const { data, path } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <div className="columns">
        
        <div className="column is-one-third">
          {posts &&
              posts.map(({ node: post }) => {
                const id = `#${post.frontmatter.title.replace(/\s/g, '')}`;
                const active = path.hash === id ? 'active' : '';
                return (
                  <p className="menu-item--container" key={post.id}>
                    <a className={`menu-item--text ${active}`} href={id}>{post.frontmatter.title}</a>
                  </p>
                )
              })
          }
          <br /> <br /> 
          <Button link="/contact"> Contáctanos </Button>
        </div>

        <div className="column">
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id}>
                <div
                  className={`blog-list-item tile is-child  ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >                  
                  <h1 id={post.frontmatter.title.replace(/\s/g, '')}>
                    {post.frontmatter.title}                          
                  </h1>                                                                              
                  <br />
                  <br />
                  <p>
                    {post.excerpt}
                    <br />
                    <br />                    
                  </p>
                  <p className="description">
                    {post.frontmatter.description}                                        
                  </p>
                  <br />
                  <br />
                  {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <br />
                    <br />
                    <h3>
                      Objetivos
                    </h3>
                    <div className="tags-wrapper--container">                      
                      {
                        post.frontmatter.tags.map(
                            item => <div className="tags-wrapper--element" key={item.id}>
                               <img src={ArrowBottom} alt="arrow-objective" className=""/> <br />
                               {item} 
                            </div>
                        )
                      }                      
                    </div>
                    <br />
                    <br /> 
                </div>                
                <br />
                <br /> 
                <br />
                <br /> 
              </div>
            ))}             
        </div>

    </div>
    )
  }
}

PatologiesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ path }) => (
  <StaticQuery
    query={graphql`
      query PatologiesRoll {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date]}
          filter: { frontmatter: { templateKey: { eq: "patologies-post" } } }
        ) {
          edges {
            node {              
              excerpt(format: PLAIN, truncate: false, pruneLength: 10000)
              id              
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                tags
                date(formatString: "MMMM DD, YYYY")                
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PatologiesRoll path={path} data={data} count={count} />}
  />
)
