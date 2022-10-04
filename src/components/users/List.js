import React, { Component } from 'react'
import { Grid, Button, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { ListItem, ListHeader } from '../controls'
import Edit from './Edit'
import Delete from './Delete'

class List extends Component {

  renderItems = () => {
    const { users, history } = this.props

    return users.map(user => {
      if (user.status !== 'DELETED') {
        return (
          <ListItem key={user.id}>
            <Grid.Column centered computer={3}>
              <span>{user.name}</span>
            </Grid.Column>
            <Grid.Column centered computer={2}>
              <span>{user.phone}</span>
            </Grid.Column>
            <Grid.Column computer={3}>
              <span>{user.user}</span>
            </Grid.Column>
            <Grid.Column computer={3}>
              <span>{user.type}</span>
            </Grid.Column>
            <Grid.Column computer={3}>
              <span>
                <Label color={user.status === 'ENABLE' ? 'orange' : 'grey'} horizontal>
                  {user.status === 'ENABLE' ? 'Activo' : 'Inactivo'}
                </Label>
              </span>
            </Grid.Column>
            <Grid.Column computer={2}>
              <Button
                circular
                color='grey'
                icon='eye'
                size='mini'
                onClick={() => { history.push('/usuarios-detalle', { userId: user.id }) }}
                floated="left" />
              <Delete id={user.id} />
            </Grid.Column>
          </ListItem>
        )
      }
    })
  }

  render() {
    const renderItems = this.renderItems()

    return (
      <Grid>
        <Grid.Column mobile={16} table={16} computer={16}>
          <ListHeader>
            <Grid.Column centered computer={3}>
              Nombre
            </Grid.Column>
            <Grid.Column centered computer={2}>
              Telefono
            </Grid.Column>
            <Grid.Column computer={3}>
              Usuario
            </Grid.Column>
            <Grid.Column computer={3}>
              Tipo
            </Grid.Column>
            <Grid.Column computer={3}>
              Status
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

export default withRouter(List)
