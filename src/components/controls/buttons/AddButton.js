import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const AddButton = ({ label, float }) => {
  return (
    <Button primary floated={float}>
      <Icon name='plus' /> {label}
    </Button>
  )
}

export default AddButton
