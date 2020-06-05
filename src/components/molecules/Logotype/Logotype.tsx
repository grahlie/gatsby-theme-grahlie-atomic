import React from 'react'
import { Link } from 'gatsby'

interface Props {
  image: JSX.Element
}

const Logotype = ({ image }: Props) => {
  return (
    <Link to="/">
      {image}
    </Link>
  )
}

export default Logotype
