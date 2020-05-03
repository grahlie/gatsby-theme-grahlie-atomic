import React from 'react';

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/seo"

import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import Button from '../components/atoms/Button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading variant='One'>Hi peopless</Heading>
    <Paragraph>Testasdasdsar</Paragraph>
    <Button variant='Primary'>Primary</Button>
    <Button variant='Secondary'>Secondary</Button>
    <Button variant='Error'>Error</Button>
    <Button variant='Success'>Success</Button>
  </Layout>
)

export default IndexPage
