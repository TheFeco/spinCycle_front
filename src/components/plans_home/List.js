import React, { Component } from 'react'
import { Grid, Label, Container } from 'semantic-ui-react'
import moment from 'moment'
import { ListItem, ListHeader } from '../controls';

import Card  from './PlansItem'

class List extends Component {

  renderItems = () => {
    const { plans } = this.props
    //console.log({ plans })

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
        <Card id={id} name={name} price={price} quantity={price} day={whenExpires} tablet={4} mobile={8} computer={4} key={id} />
      )
    })
  }

  render() {
    const renderItems = this.renderItems()

    return (
      
      <section className="fit_service_wrapper shap st sb" id="planes">
        <Container textAlign='center'>
         <div className="col-xl-12 col-lg-8 col-md-10 col-sm-12 col-12 offset-xl-0 offset-lg-2 offset-md-1 text-center">
            <div className="fit_heading text-center">
                <h2 className="heading_title">CONOCE NUESTROS PLANES</h2>
                <p></p>
            </div>
          </div>  
        </Container>
        <Grid>
            <Grid.Row>
            {renderItems}
            </Grid.Row>
        </Grid>
    </section>
    )
  }
}

export default List
