import React from 'react';

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/seo"

import Headings from '../components/atoms/Headings'
import Paragraph from '../components/atoms/Paragraph'

const theme = {
  fonts: {
      body: 'green',
  },
  colors: {
      primary: 'raleway'
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headings.Hero theme={theme}>Hi people</Headings.Hero>
    <Paragraph theme={theme}>Testasdasdsar</Paragraph>
  </Layout>
)

export default IndexPage
