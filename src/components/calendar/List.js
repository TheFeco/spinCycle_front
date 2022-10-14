import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import { ScheduleCard } from '../controls'
import Programming from './Programming'

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

class Week extends Component {
  state = { open: false, coachs: {}, calendarId: 0, daysArray: [] }

  close = () => this.setState({ open: false })
  open = (calendarId) => this.setState({ open: true, calendarId })

  renderSchedules = (dataSchedules) => {
    return dataSchedules.map(schedule => {
      return (
        <ScheduleCard
          name={schedule.coach ? schedule.coach.name : 'NO COACH'}
          hour={schedule.schedule.hour}
          allow={schedule.isOpen}
          reserved={''}
          openModal={this.open}
          calendarId={schedule.id}
          key={schedule.id}
        />
      )
    })
  }

  renderDays = () => {
    const { calendar } = this.props
    this.state.daysArray = [];
    return days.map(day => {
      var dataSchedules = calendar.findAllSchedulesByWeek.filter(item => item.schedule.day === day.toLowerCase())
      if(dataSchedules.length > 0){ this.state.daysArray.push(day) }
      dataSchedules = dataSchedules.sort((a, b) => a.schedule.order.localeCompare(b.schedule.order))
      const renderSchedules = this.renderSchedules(dataSchedules)

      return (
        <Grid.Column key={day} className="schedule__card">
          {renderSchedules}
        </Grid.Column>
      )
    })
  }

  renderHeader = () => {
    //console.log(this.state.daysArray)
    return this.state.daysArray.map(day => {
      return (
        <Grid.Column key={day} className="schedule__header">
          {day}
        </Grid.Column>
      )
    })
  }

  render() {
    const renderDays = this.renderDays()
    const renderHeader = this.renderHeader()

    return (
      <div className="schedule">
        <Grid columns={this.state.daysArray.length}>
          {renderHeader}
          {renderDays}
        </Grid>

        <Programming
          open={this.state.open}
          close={this.close}
          coachs={this.props.calendar.allCoachs}
          calendarId={this.state.calendarId}
          />
      </div>
    )
  }
}

export default Week
