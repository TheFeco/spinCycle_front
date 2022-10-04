import React from 'react';
import { Header } from 'semantic-ui-react'

const Title = ({ name }) => {
  return (
    <Header as="h1">{name}</Header>
  )
}

export default Title
