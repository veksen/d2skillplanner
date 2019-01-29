import * as React from 'react'
import Layout from '../components/layout/Layout'
import Planner from '../components/planner/Planner'
import Switcher from '../components/switcher/Switcher'
import { classes } from '../data/klass'
import './index.scss'

const styles = {
  padding: '4vw',
}

export default () => (
  <Layout>
    <main style={styles}>
      <Switcher classes={classes} currentClass="sin" />
      <Planner />
    </main>
  </Layout>
)
