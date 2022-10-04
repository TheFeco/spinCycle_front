import React, { Component } from 'react'
import { Grid, Button, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { ListItem, ListHeader } from '../../controls'
import moment from 'moment'
import CancelReservation from './CancelReservation'

class List extends Component {
  renderItems = () => {
    const { reservations, history } = this.props
    const cpReservations = reservations.map(reservation => reservation)
    cpReservations.sort((a, b) => b.day - a.day)

    return cpReservations.map(reservation =>
      <ListItem key={reservation.id}>
        <Grid.Column centered computer={3}>
          <span>{moment(reservation.day).format('DD/MM/YYYY')}</span>
        </Grid.Column>
        <Grid.Column centered computer={2}>
          <span>{reservation.bike}</span>
        </Grid.Column>
        <Grid.Column computer={3}>
          <span>
            <Label color={reservation.status === 'ACTIVE' ? 'orange' : 'red'} horizontal>
              {reservation.status === 'ACTIVE' ? 'Activo' : 'Cancelado'}
            </Label>
          </span>
        </Grid.Column>
        <Grid.Column computer={3}>
          <span>{reservation.canceledDate ? moment(reservation.canceledDate).format('DD/MM/YYYY') : ''}</span>
        </Grid.Column>
        <Grid.Column computer={3}>
          <span>{moment(reservation.created).format('DD/MM/YYYY')}</span>
        </Grid.Column>
        <Grid.Column computer={2}>
          <CancelReservation reservation={reservation} userId={this.props.userId} />
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
            <Grid.Column centered computer={3}>
              Día
            </Grid.Column>
            <Grid.Column centered computer={2}>
              Bicicleta
            </Grid.Column>
            <Grid.Column computer={3}>
              Status
            </Grid.Column>
            <Grid.Column computer={3}>
              Fecha de cancelación
            </Grid.Column>
            <Grid.Column computer={3}>
              Fecha de reservación
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
