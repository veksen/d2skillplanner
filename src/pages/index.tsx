import * as React from 'react'
import Layout from '../components/layout/Layout'
import Planner from '../components/planner/Planner'
import './index.scss'

const styles = {
  padding: '4vw',
}

export default () => (
  <Layout>
    <main style={styles}>
      <Planner />
    </main>
  </Layout>
)
