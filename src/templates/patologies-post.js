import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { PatologyPost } from '../components'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const PatologyPostTemplate = ({ helmet, post }) => {
  return (
    <section className="section">
      {helmet || ''}
      <PatologyPost
        post={post}
      />
    </section>
  )
}

const PatologyPostTmp = ({ data, path }) => {
  const { markdownRemark: post } = data

  return (
    <Layout path={path}>
      <PatologyPostTemplate
        contentComponent={HTMLContent}
        post={post}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default PatologyPostTmp

export const pageQuery = graphql`
  query PatologyPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
`
