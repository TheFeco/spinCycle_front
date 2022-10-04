import React, { Component } from 'react'
import { Grid, Label } from 'semantic-ui-react'
import moment from 'moment'
import { ListItem, ListHeader } from '../controls'
import Edit from './Edit'
import Delete from './Delete'

class List extends Component {

  renderItems = () => {
    const { plans } = this.props
    console.log({ plans })

    return plans.allPlans.map(plan => {
      const {
        id,
        name,
        price,
        isUnlimited,
        class: classes,
        expiration,
        status,
        expiresOnFinalMonth,
        expiresOnDate,
        dateOfExpiration 
      } = plan

      var whenExpires = `${expiration} días`

      if (expiresOnFinalMonth) whenExpires = 'Final del mes'
      if (expiresOnDate) whenExpires = moment(dateOfExpiration).format('DD/MM/YYYY')

      return (
        <ListItem key={id}>
          <Grid.Column centered computer={4}>
            <span>{name}</span>
          </Grid.Column>
          <Grid.Column centered computer={2}>
            <span>{price}</span>
          </Grid.Column>
          <Grid.Column computer={2}>
            <span>{isUnlimited ? 'Ilimitadas' : classes}</span>
          </Grid.Column>
          <Grid.Column computer={2}>
            <span>{whenExpires}</span>
          </Grid.Column>
          <Grid.Column computer={4}>
            <span>
              <Label color={status === 'ENABLE' ? 'orange' : 'grey'} horizontal>
                {status === 'ENABLE' ? 'Activo' : 'Inactivo'}
              </Label>
            </span>
          </Grid.Column>
          <Grid.Column computer={2}>
            <Edit plan={plan} />
            <Delete id={id} />
          </Grid.Column>
        </ListItem>
      )
    })
  }

  render() {
    const renderItems = this.renderItems()

    return (
      <Grid>
        <Grid.Column mobile={16} table={16} computer={16}>
          <ListHeader>
            <Grid.Column centered computer={4}>
              Nombre
            </Grid.Column>
            <Grid.Column centered computer={2}>
              Precio
            </Grid.Column>
            <Grid.Column computer={2}>
              Clases
            </Grid.Column>
            <Grid.Column computer={2}>
              Expira en
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
