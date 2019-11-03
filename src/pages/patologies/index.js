import React from 'react'

import Layout from '../../components/Layout'
import { PatologiesRoll } from '../../components'
import {MainSection} from "../../sections/PatologyPage"

export default class PatologiesIndexPage extends React.Component {
  render() {
    return (            
      <Layout path={this.props.path}>                        
        <MainSection />
        <section className="section">
          <PatologiesRoll />
        </section>
      </Layout>      
    )
  }
}
