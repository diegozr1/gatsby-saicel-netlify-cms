import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = ({ path }) => (
  <Layout path={path}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
