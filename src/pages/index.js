import React from "react"

import Layout from "../components/templates/layout"
import SEO from '../components/atoms/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
