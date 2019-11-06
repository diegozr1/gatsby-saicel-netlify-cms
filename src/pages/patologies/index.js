import React from 'react'

import Layout from '../../components/Layout'
import { PatologiesSection } from '../../components'
import { MainSection } from "../../sections/PatologyPage"

const PatologiesIndexPage = ({ path, location }) => (            
  <Layout path={path}>                        
    <MainSection />
    <PatologiesSection path={location} />
  </Layout>      
);

export default PatologiesIndexPage;
