import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Grid } from 'semantic-ui-react'
import { AddButton } from '../../controls'
import { Mutation, Query } from 'react-apollo'
import { modifyReservation } from '../../../api/mutations/calendar'
import { allCalendarById } from '../../../api/queries/users'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class CancelReservation extends Component {
  constructor() {
    super()

    this.calendar = { reservations: []}
  }

  state = { open: false }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })


  handleCancelReservations = (modify) => {
    return (
      <Query query={allCalendarById} variables={{ calendarId: this.props.reservation.calendarId}}>
        {({ loading, error, data }) => {
            if (loading) return null
            if (error) return null
            if (data) {
              this.calendar = data.allCalendarById
              return null
            }
          }
        }
      </Query>
    )

    const reservationsList = this.calendar.reservations.filter(reservation => reservation.user.id !== this.props.userId)
    const reservationsIds = reservationsList.map(reservation => { return { _id: reservation.id }})
    const reservationByUser = this.calendar.reservations.filter(reservation => reservation.user.id === this.props.userId)
    // const reservationId = reservationByUser[0].id
    //
    // modify({
    //   variables: {
    //     data: {
    //       canceledDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    //       status: 'CANCELED'
    //     },
    //     id: reservationId,
    //     calendarId: this.calendar.calendarId,
    //     reservationsList: reservationsIds
    //   }
    // })
    //
    // this.props.close()
  }

  render() {
    return (
      <Fragment>
        <Button
          negative
          icon='cancel'
          content='Cancelar'
          onClick={() => this.open()}
          />

        <Modal size="tiny" open={this.state.open}>
          <Modal.Content>
            ¿Deseas cancelar esta reservación?
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={() => this.close()}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifyReservation}>
              {modify  =>
                <Button
                  negative
                  icon='cancel'
                  content='Cancelar'
                  onClick={() => this.handleCancelReservations(modify)}
                  />
              }
            </Mutation>
          </Modal.Actions>
        </Modal>
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    )
  }
}

export default CancelReservation
