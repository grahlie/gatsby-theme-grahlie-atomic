import React from "react"
import styled from "@emotion/styled";
import { Link } from "gatsby"

const StyledList = styled.ul`
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
  width: "100%";
  display: block;
  text-align: center;
  position: relative;
  top: 0px;
`;

const StyledSmallListItem = styled.li`
  margin: 1rem 0px;
  padding: 0.8rem 0;
  font-size: 2rem;
  list-style: outside none none;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Bison-DemiBold", sans-serif;

  a,
  a:hover,
  a:visited,
  a:focus {
    color: #fff;
  }

  > p {
    margin-bottom: calc(1.45rem / 2);
  }
`

const List = ({ close, links }) => {
  const navigation = links.map((link, index) => (
    <StyledSmallListItem key={index} onClick={close}>
      <Link to={link.href}>{link.title}</Link>
    </StyledSmallListItem>
  ))

  return <StyledList>{navigation}</StyledList>
}

export default List
