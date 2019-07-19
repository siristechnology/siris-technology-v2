import React from 'react'
import {
  Intro,
  Skills,
  Work,
  Services,
  Github,
  Popular,
  RecentTalks,
} from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="Hello world!" type="Organization" />
    <Intro />
    <Work />
    <Services />
    <Github />
    <Popular />
    <RecentTalks />
  </Layout>
)
