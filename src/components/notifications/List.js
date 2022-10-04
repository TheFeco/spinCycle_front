import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ColorType, ListItem, ListHeader } from '../controls'
import moment from 'moment'

const List = ({ notifications }) => (
  <Grid>
    <Grid.Column mobile={16} table={16} computer={16}>
      <ListHeader>
        <Grid.Column centered="true" computer={1}>
          Tipo
        </Grid.Column>
        <Grid.Column centered="true" computer={11}>
          Mensaje
        </Grid.Column>
        <Grid.Column computer={4}>
          Fecha
        </Grid.Column>
      </ListHeader>
      {
        notifications.map((not) => (
          <ListItem key={not.id}>
            <Grid.Column centered="true" computer={1}>
              <ColorType color={not.type=== 'RECORDATORY'? 'yellow': 'green'} />
            </Grid.Column>
            <Grid.Column centered="true" computer={11}>
              <span>{not.message}</span>
            </Grid.Column>
            <Grid.Column computer={4}>
              <span>{moment(not.created).add('days', 1).format('DD/MM/YYYY')}</span>
            </Grid.Column>
          </ListItem>
        ))
      }
      {notifications.length < 1 &&
        <ListItem>
          <Grid.Column centered="true" computer={16}>
          <em>No hay notificaciones</em>
          </Grid.Column>
        </ListItem>
      }
    </Grid.Column>
  </Grid>
)

export default List
