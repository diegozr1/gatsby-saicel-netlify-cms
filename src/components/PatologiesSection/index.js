import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { PatologyNav, PatologyPost } from "..";

import "./PatologiesRoll.css";


export const PatologiesRoll = ({ data, path }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section className="patology--section">
      <PatologyNav posts={posts} path={path} />
      <div className="patology--posts">
        {posts && posts.map(({node: post}) => <PatologyPost post={post} key={post.id} />)}
      </div>
    </section>
  );
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
              excerpt(format: HTML, truncate: false, pruneLength: 10000)
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
