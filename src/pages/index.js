import React from 'react';

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/seo"

import Headings from '../components/atoms/Headings'
import Paragraph from '../components/atoms/Paragraph'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headings variant='One'>Hi peopless</Headings>
    <Paragraph>Testasdasdsar</Paragraph>
  </Layout>
)

export default IndexPage
