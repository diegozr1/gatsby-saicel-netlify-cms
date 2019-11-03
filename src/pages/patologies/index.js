import React from 'react'

import Layout from '../../components/Layout'
import { PatologiesRoll } from '../../components'
import {MainSection} from "../../sections/PatologyPage"

const PatologiesIndexPage = ({ path, location }) => (            
  <Layout path={path}>                        
    <MainSection />
    <section className="section">
      <PatologiesRoll path={location} />
    </section>
  </Layout>      
);

export default PatologiesIndexPage;
