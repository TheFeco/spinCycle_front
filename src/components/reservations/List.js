import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import { ScheduleWithReserved } from '../controls'
import Reservation from './Reservation'
import moment from 'moment'

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

const daysMoment = {
  'Lunes': 'monday',
  'Martes': 'tuesday',
  'Miercoles': 'wednesday',
  'Jueves': 'thursday',
  'Viernes': 'friday',
  'Sábado': 'saturday',
  'Domingo': 'sunday'
}

class Week extends Component {
  state = {
    open: false,
    calendarId: 0,
    reservations: [],
    date: '',
    schedule: {
      schedule: {
        hour: ':',
        ampm: 'AM'
      }
    },
    reservedOnDay: false,
    reservedForMeSaturday: false
   }

  close = () => this.setState({ open: false })
  open = (calendarId, reservations, date, schedule, reservedOnDay, reservedForMeSaturday) => this.setState({ open: true, calendarId, reservations, date, schedule, reservedOnDay, reservedForMeSaturday })

  renderSchedules = (dataSchedules, pendings) => {
    const { userId } = this.props

    const reservationInDay = dataSchedules.filter(schedule => schedule.reservations.length > 0).map(schedule => ({ reservations: schedule.reservations }))
    var reservedMeOnDay = reservationInDay.filter(item => {
      const reserved = item.reservations.filter(reservation => reservation.user.id === userId)

      return reserved.length > 0
    })

    reservedMeOnDay = reservedMeOnDay.length > 0

    return dataSchedules.map(schedule => {
      const reservations = schedule.reservations
      const reservedForMe = reservations.filter(reservation => reservation.user.id === userId)
      const date = schedule.dateOfCalendar // moment(`${moment(schedule.dateOfCalendar).format('YYYY-MM-DD')} ${schedule.schedule.hour}:00 ${schedule.schedule.ampm || 'AM'}`)
      const reservedForMeSaturday = reservations.filter(reservation => reservation.user.id === userId && moment(reservation.day).format('ddd') === 'Fri')
	    const reserdForMeSaturday = reservations.filter(reservation => console.log(reservation.user.id === userId && moment(reservation.day).format('ddd') === 'Fri'))
      //console.log({  reservedForMeSaturday, reserdForMeSaturday})

      if (schedule.isOpen) {
        return (
          <ScheduleWithReserved
            schedule={schedule}
            date={date}
            name={schedule.coach ? schedule.coach.name : 'NO COACH'}
            hour={schedule.schedule.hour}
            allow={schedule.isOpen}
            reservedOnDay={pendings > 1000 && reservedMeOnDay}
	    reservedForMeSaturday={reservedForMeSaturday.length > 0}
            reserved={reservedForMe.length > 0}
            reservations={schedule.reservations}
            openModal={this.open}
            calendarId={schedule.id}
            key={schedule.id}
          />
        )
      }
      else {
        return <Fragment />
      }
    })
  }

  renderHeader = () => {
    const { calendar } = this.props
    const pendings = this.getPendings()

    return days.map(day => {
      var dataSchedules = calendar.findAllSchedulesByWeek.filter(item => item.schedule.day === day.toLowerCase())

      dataSchedules = dataSchedules.sort((a, b) => a.schedule.order.localeCompare(b.schedule.order))
      const renderSchedules = this.renderSchedules(dataSchedules, pendings)
      return (
        <Grid.Column mobile={16} computer={2} key={day} className="schedule__header">
          <span className="schedule__header">{day}</span>

          <Grid.Column key={day} className="schedule__card">
            {renderSchedules}
          </Grid.Column>
        </Grid.Column>
      )
    })
  }

  getPendings = () => {
    const { boughts } = this.props;
    return boughts.reduce((a, b) => +a + +b.availables, 0);
  }

  render() {
    const renderHeader = this.renderHeader()
    const { open, calendarId, reservations, date, schedule, reservedOnDay, reservedForMeSaturday } = this.state
    const pendings = this.getPendings()

    return (
      <div className="schedule">
        <div style={{paddingTop: 0, paddingBottom: 30}}>
          <h3>Reservaciones pendientes {pendings > 1000 ? 'Ilimitadas' : pendings}</h3>
        </div>
        <Grid columns={7}>
          {renderHeader}
        </Grid>

        <Reservation
          open={open}
          close={this.close}
          calendarId={calendarId}
          reservations={reservations}
          userId={this.props.userId}
          pendings={pendings}
          date={date}
          schedule={schedule}
          reservedForMeSaturday={reservedForMeSaturday}
          rol={this.props.rol}
          showCalendar={this.props.showCalendar}
          reservedOnDay={reservedOnDay}
          />
      </div>
    )
  }
}

export default Week
