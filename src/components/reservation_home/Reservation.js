import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Checkbox, Grid, Popup } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { addReservation, modifyReservation, modifyCalendar } from '../../api/mutations/calendar'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class Reservation extends Component {
  state = { loading: false }

  handleClick = async (save, number, isReservable) => {
    this.setState({ loading: true })
    this.props.showCalendar()
    const { date, userId, calendarId, reservedForMeSaturday } = this.props

    if (moment(date).format('ddd') === 'Sat' && reservedForMeSaturday) {
      alert('No puedes reservar mas de una clase en sábado.')
      return;
    }

    if (isReservable) {
      const newReservation = {
        day: date, // moment(date).format('-MM-DD'),
        user: { _id: userId },
        bike: number,
        created: moment().format('YYYY-MM-DD HH:mm:ss'),
        calendarId
      }

      const response = await save({
        variables: {
          data: newReservation,
          calendarId
        }
      })

      if (!response.data.addReservation) {
       //  alert('No se pudo agregar la reservación, verifica que tu plan se encuentre vigente en la fecha seleccionada.')
      }
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'Este lugar ya esta reservado, intenta con otro.',
        level: 'warning'
      });
    }

    this.setState({ loading: false })
    this.props.close()
    setTimeout(() => this.props.showCalendar(), 3000)
  }

  handleCancelReservations = (modify, id = null, dateOfCalendar) => {
    this.setState({ loading: true })
    this.props.showCalendar()

    const { calendarId, userId, reservations } = this.props

    const dateWithFormat = moment(dateOfCalendar).add(1, 'days').format('[día] DD [a las] HH:mm')

    const usid = id || userId
    const reservationsList = reservations.filter(reservation => reservation.user.id !== usid)
    const reservationsIds = reservationsList.map(reservation => { return { _id: reservation.id }})
    const reservationByUser = reservations.filter(reservation => reservation.user.id === usid)
    const reservationId = reservationByUser[0].id

    modify({
      variables: {
        data: {
          canceledDate: moment().format('YYYY-MM-DD HH:mm:ss'),
          status: 'CANCELED'
        },
        id: reservationId,
        calendarId: calendarId,
        reservationsList: reservationsIds
      }
    })

    // fetch('http://localhost:3001/api/send-notification', {
    //   method: "POST",
    //   body: JSON.stringify({ calendarId, type: 'cancel', message: `Se liberó un lugar en la clase ${dateWithFormat}, obtenlo antes de que te lo ganen.` }),
    //   headers: {
    //   "content-type": "application/json"
    //   }
    // })

    this.setState({ loading: false })
    this.props.close()
    setTimeout(() => this.props.showCalendar(), 3000)
  }

  renderBike = (number, float, diff, dateOfCalendar) => {
    const { loading } = this.state
    const { reservedOnDay, reservations, pendings, userId: usID } = this.props
    const reservationByUser = reservations.filter(reservation => reservation.user.id === usID)
    var disabled = loading || reservedOnDay
    if (reservationByUser.length > 0 || pendings <= 0 || diff >= 0) { disabled = true }
    var color = 'gray'
    var user = ''
    var userId = ''
    const reservation = reservations.filter(reservation => reservation.bike === number)
    if (reservation.length > 0) {
      user = reservation[0].user.user
      userId = reservation[0].user.id
      if (reservation[0].user.id === usID) {
        color = 'orange'
      }
      else {
        color = 'black'
        disabled = true
      }
    }

    const isVisiblePopup = color !== 'gray' && this.props.rol === 'ADMIN'
    const isVisibleBike = color === 'gray' || !isVisiblePopup

    return (
      <Mutation mutation={addReservation}>
        {save  =>
          <Fragment>
            {isVisibleBike &&
              <Button
                circular
                color={color}
                onClick={() => this.handleClick(save, number, color !== 'gray' ? false : true)}
                disabled={this.props.rol === 'CLIENT' ? disabled : loading}
                style={{ float }}>
                {number}
              </Button>
            }
            {isVisiblePopup &&
              <Popup
                trigger={
                  <Button
                    circular
                    color={color}
                    onClick={() => this.handleClick(save, number, false)}
                    disabled={this.props.rol === 'CLIENT' ? disabled : false}
                    style={{ float }}>
                    {number}
                  </Button>
                }
                content={user}
                flowing
                hoverable
                position='top center'>

                <Fragment>
                  <span>{user}</span> <br />

                  <Mutation mutation={modifyReservation}>
                    {modify  =>
                      <Button
                        negative
                        icon='cancel'
                        content='Cancelar'
                        size="mini"
                        float="center"
                        onClick={() => this.handleCancelReservations(modify, userId, dateOfCalendar)}
                        />
                    }
                  </Mutation>
                </Fragment>
              </Popup>
            }
          </Fragment>
        }
      </Mutation>
    )
  }

  suscribe = (modify, checked) => {
    const { schedule, userId, calendarId } = this.props 
    const subscriptions = schedule.subscriptions !== undefined ? [...schedule.subscriptions] : []
    const subscriptionsIds = subscriptions.map(sub => { return { _id: sub.id }})
    
    const subscriptionsList = checked ? 
      [...subscriptionsIds, ...[{ _id: userId }]] : 
      subscriptions.map(sub => { if (sub.id !== userId){ return { _id: sub.id }}})

    modify({
      variables: {
        data: {
          subscriptions: subscriptionsList
        },
        id: calendarId
      }
    })
  }

  render() {
    const { date, reservations, userId, schedule, close, open } = this.props

    const reservationByUser = reservations.filter(reservation => reservation.user.id === userId)
    const dateOfCalendar = new Date(date)
    const hour = schedule.schedule.hour.toString()
    const splitHour = hour.split(':')
    const hourWithAMPM = schedule.schedule.ampm === 'PM' ? (parseInt(splitHour[0]) + 12).toString() : splitHour[0]
    dateOfCalendar.setHours(hourWithAMPM, splitHour[1], "00")
    const diff = moment().diff(moment(dateOfCalendar).add(1, 'day'), 'minutes')
    const subscriptionsByUser = schedule.subscriptions !== undefined ? schedule.subscriptions.filter(sub => sub ? sub.id === userId : false) : []

    return (
      <Fragment>
        <Modal size="tiny" open={open}>
          <Header>
            <h4>Reserva tu lugar</h4>
          </Header>
          <Modal.Content>
            <Grid columns={6}>
              <Grid.Column style={{ padding: '20px 5px' }}>
                {this.renderBike(6, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '40px 5px 20px' }}>
                {this.renderBike(5, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '55px 5px 20px' }}>
                {this.renderBike(4, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '55px 5px 20px' }}>
                {this.renderBike(3, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '40px 5px 20px' }}>
                {this.renderBike(2, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '20px 5px' }}>
                {this.renderBike(1, '', diff, dateOfCalendar)}
              </Grid.Column>
            </Grid>
            <Grid columns={6}>
              <Grid.Column style={{ padding: '0px 5px', marginTop: -15 }}>
                {this.renderBike(12, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '0px 5px', marginTop: 10 }}>
                {this.renderBike(11, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '20px 5px' }}>
                {this.renderBike(10, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '20px 5px' }}>
                {this.renderBike(9, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '10px 5px', marginTop: -10 }}>
                {this.renderBike(8, '', diff, dateOfCalendar)}
              </Grid.Column>
              <Grid.Column style={{ padding: '0px 5px', marginTop: -20 }}>
                {this.renderBike(7, '', diff, dateOfCalendar)}
              </Grid.Column>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' size="small" onClick={close}>
              <Icon name='remove' /> Cerrar
            </Button>
            {diff < -240 &&
              <Fragment>
                {reservationByUser.length > 0 &&
                  <Mutation mutation={modifyReservation}>
                    {modify  =>
                      <Button
                        negative
                        icon='cancel'
                        content='Cancelar'
                        size="small"
                        onClick={() => this.handleCancelReservations(modify, null, dateOfCalendar)}
                        />
                    }
                  </Mutation>
                }
              </Fragment>
            }
          </Modal.Actions>
        </Modal>
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    )
  }
}

export default Reservation
