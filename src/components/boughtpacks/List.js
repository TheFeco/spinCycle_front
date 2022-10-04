import React, { Component } from 'react'
import { Grid, Button, Label } from 'semantic-ui-react'
import { ListItem, ListHeader } from '../controls'
import moment from 'moment'

class List extends Component {
  renderItems = () => {
    const { boughts } = this.props
   const availables = boughts.filter(i => i.availables > 0);
    return availables.map(bought => {
      return (
        <ListItem>
          <Grid.Column centered computer={6}>
            <span>{bought.user.name}</span>
          </Grid.Column>
          <Grid.Column computer={3}>
            <span>{bought.plan.name}</span>
          </Grid.Column>
          <Grid.Column computer={2}>
            <span>{bought.quantity > 1000 ? 'Ilimitadas' : bought.quantity}</span>
          </Grid.Column>
          <Grid.Column computer={3}>
            <span>{moment(bought.date).format('DD/MM/YYYY')}</span>
          </Grid.Column>
          <Grid.Column computer={2}>
		<span></span>
          </Grid.Column>
        </ListItem>
      )
    })
  }

  render() {
    const renderItems = this.renderItems()

    return (
      <Grid>
        <Grid.Column mobile={16} table={16} computer={16}>
          <ListHeader>
            <Grid.Column centered computer={6}>
              Nombre
            </Grid.Column>
            <Grid.Column computer={3}>
              Paquete
            </Grid.Column>
            <Grid.Column computer={2}>
              Clases
            </Grid.Column>
            <Grid.Column computer={3}>
              Fecha
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
