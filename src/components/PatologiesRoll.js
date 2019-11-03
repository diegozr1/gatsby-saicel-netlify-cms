import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Button } from "./";
class PatologiesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns">
        
        <div className="column is-one-third">
          {posts &&
              posts.map(({ node: post }) => (
                <p>
                  <a href={`#${post.frontmatter.title.replace(/\s/g, '')}`} key={post.id}>{post.frontmatter.title}</a>
                </p>
              ))
          }
          <Button link="/contact"> Contactanos </Button>
        </div>

        <div className="column">
          {posts &&
            posts.map(({ node: post }) => (
              <div  key={post.id}>
                <div
                  className={`blog-list-item tile is-child  ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>                                        
                      <h1 id={post.frontmatter.title.replace(/\s/g, '')}>
                        <Link
                          className="title is-size-1"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}                          
                        </Link>
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

export default () => (
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
    render={(data, count) => <PatologiesRoll data={data} count={count} />}
  />
)
