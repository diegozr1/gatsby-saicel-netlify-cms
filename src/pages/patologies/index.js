import React from 'react'

import Layout from '../../components/Layout'
import PatologiesRoll from '../../components/PatologiesRoll'

export default class PatologiesIndexPage extends React.Component {
  render() {
    return (
      <Layout path={this.props.path}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/patologies-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Patologías
          </h1>
        </div>
        <p 
        style={{
            paddingRight: '18em',
            paddingLeft: '4em',
            fontSize: '35px'
        }}
        >
            Algunos tratamientos en los que hemos estado involucrados con muy buenos resultados son en transtornos neurológicos como: 
        </p>
        <section className="section">
          <div className="container">
            <div className="content">
              <PatologiesRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
