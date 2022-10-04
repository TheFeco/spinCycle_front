import React, { Component } from 'react'
import { Grid, Button, Label } from 'semantic-ui-react'
import { ListItem, ListHeader } from '../controls'
import Edit from './Edit'
import Delete from './Delete'

class List extends Component {

  renderItems = () => {
    const { schedules } = this.props

    return schedules.allSchedules.map(schedule =>
      <ListItem key={schedule.id}>
        <Grid.Column centered computer={2}>
          <span>{schedule.order}</span>
        </Grid.Column>
        <Grid.Column computer={4}>
          <span>{schedule.day}</span>
        </Grid.Column>
        <Grid.Column computer={4}>
          <span>{schedule.hour} {schedule.ampm}</span>
        </Grid.Column>
        <Grid.Column computer={4}>
          <span>
            <Label color={schedule.status === 'ENABLE' ? 'orange' : 'grey'} horizontal>
              {schedule.status === 'ENABLE' ? 'Activo' : 'Inactivo'}
            </Label>
          </span>
        </Grid.Column>
        <Grid.Column computer={2}>
          <Edit schedule={schedule} />
          <Delete id={schedule.id} />
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
            <Grid.Column centered computer={2}>
              Orden
            </Grid.Column>
            <Grid.Column computer={4}>
              Día
            </Grid.Column>
            <Grid.Column computer={4}>
              Horario
            </Grid.Column>
            <Grid.Column computer={4}>
              Activo
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
