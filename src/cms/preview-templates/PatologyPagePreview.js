import React from 'react'
import PropTypes from 'prop-types'
import { PatologyPostTemplate } from '../../templates/patologies-post'

const PatologyPostTemplate = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PatologyPostTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PatologyPostTemplate
