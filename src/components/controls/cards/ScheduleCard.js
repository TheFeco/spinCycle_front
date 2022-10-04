import React from 'react'
import { Header } from 'semantic-ui-react'

const ScheduleCard = ({ name, hour, allow, reserved, openModal, calendarId }) => {
  const coach = name === 'No Coach' ? <Header as='h5' color='red'>No Coach</Header> : <span>{name}</span>

  const handleClick = () => { openModal(calendarId, name) }

  return (
    <div className="schedule__card--div" onClick={handleClick}>
      <div className="hour">{hour}</div>
      <div className="schedule__close">
        <small>{allow ? '' : 'Cerrada'}</small>
      </div>
      <div className="coach">
        {coach}
      </div>
    </div>
  )
}

export default ScheduleCard
