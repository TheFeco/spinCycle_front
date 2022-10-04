import React from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import moment from 'moment'
import { modifyReservation } from '../../../api/mutations/calendar'

const ReservationCard = ({ reservation, cancelReservation }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column computer={4}>
          <div className="reservation__date">
            <Icon name="calendar check outline" />
            <span>{` ${moment(reservation.dateOfCalendar).format('DD/MM')}`}</span>
          </div>
        </Grid.Column>
        <Grid.Column computer={12}>
          <div className="panel__card--info">
            <span><small>HORA:</small> {reservation.schedule.hour} {reservation.schedule.ampm ? reservation.schedule.ampm : 'AM'} &nbsp;&nbsp;&nbsp;&nbsp;</span><br />
            <span>{reservation.reservation.user.name}</span>

            {/* <Mutation mutation={modifyReservation}>
              {modify  =>
                <Button
                  negative
                  icon='cancel'
                  content='Cancelar'
                  size="mini"
                  float="right"
                  style={{ float: 'right', marginTop: -15 }}
                  onClick={() => cancelReservation(modify, reservation)}
                  />
              }
            </Mutation> */}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ReservationCard
