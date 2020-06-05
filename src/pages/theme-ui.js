import React from "react"
import { Styled } from 'theme-ui'


import Landingpage from '../components/templates/Landingpage'


const ThemeUI = () => (
  <Landingpage>
    <Styled.h1>Hi peopless</Styled.h1>
    <Styled.h2>Hi peopless</Styled.h2>
    <Styled.h3>Hi peopless</Styled.h3>
    <Styled.h4>Hi peopless</Styled.h4>
    <Styled.h5>Hi peopless</Styled.h5>
    <Styled.h6>Hi peopless</Styled.h6>
    <Styled.p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Styled.p>
    <Styled.a to="/">LINK</Styled.a>
    <br />
    <Styled.strong>Strong</Styled.strong><br />
    <Styled.b>Bold</Styled.b><br />
    <Styled.em>Em</Styled.em><br />
    <Styled.i>Italic</Styled.i><br />
    <br /><br />
    <Styled.hr />
  
    <Styled.ul>
        <Styled.li>List item</Styled.li>
        <Styled.li>List item</Styled.li>
        <Styled.li>List item</Styled.li>
    </Styled.ul>
    <Styled.ol>
        <Styled.li>List item</Styled.li>
        <Styled.li>List item</Styled.li>
        <Styled.li>List item</Styled.li>
    </Styled.ol>
  </Landingpage>
)

export default ThemeUI
