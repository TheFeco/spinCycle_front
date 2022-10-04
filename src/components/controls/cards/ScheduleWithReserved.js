import React from 'react'
import { Grid, Card, Header } from 'semantic-ui-react'
import { ColorType } from '../'

const ScheduleWithReserved = ({ schedule, name, hour, reserved, reservations, openModal, calendarId, date, reservedOnDay, reservedForMeSaturday }) => {
  const coach = name === 'No Coach' ? <Header as='h5' color='red'>No Coach</Header> : <span>{name}</span>
  const handleClick = () => openModal(calendarId, reservations, date, schedule, reservedOnDay, reservedForMeSaturday)
  const allows = reservations.length < 12 ? <ColorType color="gray" schedule={true} /> : <ColorType color="black" schedule={true} />

  return (
    <div className="schedule__card--div" onClick={handleClick}>
      <div className="schedule__card--allows">
        {allows}
      </div>
      {reserved &&
        <div className="schedule__card--reserved">
          <ColorType color="orange" schedule={true} />
        </div>
      }
      <div className="hour">{hour}</div>
      <div className="coach">
        {coach}
      </div>
    </div>
  )
}

export default ScheduleWithReserved
