import React from 'react';

import Landingpage from '../components/templates/Landingpage'

import SEO from '../components/molecules/Seo'

import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import Button from '../components/atoms/Button'

const IndexPage = () => (
    <Landingpage>
        <SEO title="Home" />
        <Heading variant='Hero'>Hi peopless</Heading>
        <Heading variant='One'>Hi peopless</Heading>
        <Heading variant='Two'>Hi peopless</Heading>
        <Heading variant='Three'>Hi peopless</Heading>
        <Heading variant='Four'>Hi peopless</Heading>
        <Heading variant='Five'>Hi peopless</Heading>
        <Heading variant='Six'>Hi peopless</Heading>
        <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
        <Button variant='Primary'>Primary</Button>
        <Button variant='Secondary'>Secondary</Button>
        <Button variant='Error'>Error</Button>
        <Button variant='Success'>Success</Button>
    </Landingpage>
)

export default IndexPage
