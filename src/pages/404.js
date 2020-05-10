import React from "react"

import Landingpage from '../components/templates/Landingpage'

import SEO from '../components/molecules/Seo'

import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'

const NotFoundPage = () => (
  <Landingpage>
    <SEO title="404: Not found" />
    <Heading variant='One'>NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Landingpage>
)

export default NotFoundPage
