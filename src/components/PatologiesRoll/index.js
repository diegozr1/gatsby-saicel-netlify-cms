import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Button } from "..";
import "./PatologiesRoll.css";
class PatologiesRoll extends React.Component {
  render() {
    const { data, path } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns">
        
        <div className="column is-one-third">
          {posts &&
              posts.map(({ node: post }) => {
                const id = `#${post.frontmatter.title.replace(/\s/g, '')}`;
                const active = path.hash === id ? 'active' : '';
                return (
                  <p class="menu-item--container" key={post.id}>
                    <a class={`menu-item--text ${active}`} href={id}>{post.frontmatter.title}</a>
                  </p>
                )
              })
          }
          <br /> <br /> 
          <Button link="/contact"> Contactanos </Button>
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
                  <header>                                        
                      <h1 id={post.frontmatter.title.replace(/\s/g, '')}>
                        {post.frontmatter.title}                          
                      </h1>                                                            
                  </header>
                  <br />
                  <br />
                  <p>
                    {post.excerpt}
                    <br />
                    <br />                    
                  </p>
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
                </div>
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
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
