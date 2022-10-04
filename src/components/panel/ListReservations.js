import React, { Component, Fragment } from 'react'
import { ReservationCard } from '../controls'
import moment from 'moment'

class ListReservations extends Component {
  state = { reservations: [] }

  componentDidMount() {
    this.getReservations()
  }

  getReservations = () => {
    const { data, rol, userId } = this.props
    var array = []

    const reservations = data.allReservations.map(item => {
      return item.reservations.map(reservation => {
        if (rol === 'ADMIN') {
          array.push({
            dateOfCalendar: item.dateOfCalendar,
            schedule: item.schedule,
            reservation,
            reservations: item.reservations,
            id: item.id
          })
        }
        else {
          if (reservation.user.id === userId) {
            array.push({
              dateOfCalendar: item.dateOfCalendar,
              schedule: item.schedule,
              reservation,
              reservations: item.reservations,
              id: item.id
            })
          }
        }

        return
      })
    })

    this.setState({ reservations: array })
  }

  handleCancelReservations = (modify, reservationData) => {
    const { id, reservation: { user }, reservations } = reservationData
    const userId = user.id
    const reservationsList = reservations.filter(reservation => reservation.user.id !== userId)
    const reservationsIds = reservationsList.map(reservation => { return { _id: reservation.id }})
    const reservationByUser = reservations.filter(reservation => reservation.user.id === userId)
    const reservationId = reservationByUser[0].id

    modify({
      variables: {
        data: {
          canceledDate: moment().format('YYYY-MM-DD HH:mm:ss'),
          status: 'CANCELED'
        },
        id: reservationId,
        calendarId: id,
        reservationsList: reservationsIds
      }
    }).then(response => {
      const reservationsData = this.state.reservations

      // por mientras arreglo este pedo
      window.location.href = '/panel'
    })
  }

  renderReservations = () => {
    const { reservations } = this.state

    return reservations.map((reservation, index) => {
      return (
        <ReservationCard
          reservation={reservation}
          cancelReservation={this.handleCancelReservations}
          key={reservation.id}
        />
      )
    })
  }

  render() {
    const renderReservations = this.renderReservations()

    return (
      <Fragment>
        {renderReservations}
      </Fragment>
    )
  }
}

export default ListReservations
