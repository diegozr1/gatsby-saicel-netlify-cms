import React from 'react'
import PropTypes from 'prop-types'
import { PatologyPostTemplate } from '../../templates/patologies-post'

const PatologyPostTemplateContainer = ({ entry, widgetFor }) => (
  <PatologyPostTemplate
    post={{
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        description: entry.getIn(['data', 'description']),
        featuredimage: entry.getIn(['data', 'featuredimage']),
        tags: entry.getIn(['data', 'tags'])
      },
      html: widgetFor('body')
    }}
  />
)

PatologyPostTemplateContainer.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PatologyPostTemplateContainer
