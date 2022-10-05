import React, { Component } from 'react'
//import { Grid, Label } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import moment from 'moment'
import { FitHeading, HeadingTitle } from '../plans_home/styled'

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
        <Container>
          <Row>
            <Col xl={12}  className="offset-xl-0 offset-lg-2 offset-md-1">
              <FitHeading>
                  <HeadingTitle>CONOCE NUESTROS PLANES</HeadingTitle>
                  <p></p>
              </FitHeading>
            </Col>
          </Row>  
        </Container>
        <Container>
            <Row>
            {renderItems}
            </Row>
        </Container>
    </section>
    )
  }
}

export default List
