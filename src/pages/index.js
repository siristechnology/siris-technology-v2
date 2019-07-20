import React from 'react'
import {
  Intro,
  Work,
  Services,
  Github,
} from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="Hello world!" type="Organization" />
    <Intro />
    <Services />
    <Work />
    <Github />
  </Layout>
)
