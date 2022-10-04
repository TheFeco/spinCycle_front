import React, { Component } from 'react'
import { Grid, Button, Label } from 'semantic-ui-react'
import { ListItem, ListHeader } from '../controls'
import Edit from './Edit'
import Delete from './Delete'

class List extends Component {

  renderItems = () => {
    const { coachs } = this.props

    return coachs.allCoachs.map(coach =>
      <ListItem key={coach.id}>
        <Grid.Column centered computer={4}>
          <span>{coach.name}</span>
        </Grid.Column>
        <Grid.Column computer={2}>
          <span>{coach.gender === 'FEMALE' ? 'MUJER' : 'HOMBRE'}</span>
        </Grid.Column>
        <Grid.Column computer={6}>
          <span>{coach.review}</span>
        </Grid.Column>
        <Grid.Column computer={2}>
          <span>
            <Label color={coach.status === 'ENABLE' ? 'orange' : 'grey'} horizontal>
              {coach.status === 'ENABLE' ? 'Activo' : 'Inactivo'}
            </Label>
          </span>
        </Grid.Column>
        <Grid.Column computer={2}>
          <Edit coach={coach} />
          <Delete id={coach.id} />
        </Grid.Column>
      </ListItem>
    )
  }

  render() {
    const renderItems = this.renderItems()

    return (
      <Grid>
        <Grid.Column mobile={16} table={16} computer={16}>

          <ListHeader>
            <Grid.Column centered computer={4}>
              Nombre
            </Grid.Column>
            <Grid.Column computer={2}>
              Sexo
            </Grid.Column>
            <Grid.Column computer={6}>
              Reseña
            </Grid.Column>
            <Grid.Column computer={2}>
              Activo
            </Grid.Column>
            <Grid.Column computer={2}>
              Opciones
            </Grid.Column>
          </ListHeader>

          {renderItems}
        </Grid.Column>
      </Grid>
    )
  }
}

export default List
