import React from 'react';
import * as Icon from 'react-feather'

import Landingpage from '../components/templates/Landingpage'

import Hero from '../components/molecules/Hero'

import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import Button from '../components/atoms/Button'
import Divider from '../components/atoms/Divider'
import { themeFunc } from '../theme';

const IndexPage = () => {
    const theme = {theme: themeFunc()}

    return (
        <>

            <Heading variant='Hero'>Hi peopless</Heading>
            <Heading variant='One'>Hi peopless</Heading>
            <Heading variant='Two'>Hi peopless</Heading>
            <Heading variant='Three'>Hi peopless</Heading>
            <Heading variant='Four'>Hi peopless</Heading>
            <Heading variant='Five'>Hi peopless</Heading>
            <Heading variant='Six'>Hi peopless</Heading>
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
            
            <Divider />

            <Heading variant='Two'>Hero</Heading>
            <Hero variant='Centered'>
                <Heading variant='Hero'>Headline makes greater impact.</Heading>
                <Heading variant='Two'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Heading>
            </Hero>
            <Hero variant='Centered'>
                <Heading variant='Hero'>Headline with buttons also.</Heading>
                <Heading variant='Two'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Heading>
                <Button variant='Accent'>Demo</Button>
            </Hero>

            <Heading variant='Two'>Buttons</Heading>
            <div style={{display: 'flex', spaceBetween: 'space'}}>
                <Button variant='Primary'>Primary</Button>
                <Button variant='Secondary'>Secondary</Button>
                <Button variant='Accent'>Accent</Button>
                <Button variant='Error'>Error</Button>
                <Button variant='Success'>Success</Button>
            </div>

            <Divider />

            <Heading variant='Two'>Icons</Heading>
            <Paragraph>Feather Icons are implemented in this theme, more information <a href="https://feathericons.com/" target="_blank" rel="noreferrer">here</a></Paragraph>
            <Icon.Box />
            <Icon.Briefcase />
            <Icon.Calendar />
            <br />
            <Icon.Box color={theme.theme.colors.primary} />
            <Icon.Briefcase color={theme.theme.colors.primary} />
            <Icon.Calendar color={theme.theme.colors.primary} />
        </>
    )
}

export default IndexPage
