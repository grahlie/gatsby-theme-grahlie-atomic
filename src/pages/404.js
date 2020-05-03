import React from "react"

import Layout from "../components/templates/layout"

import SEO from "../components/molecules/seo"

import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading variant='One'>NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Layout>
)

export default NotFoundPage
