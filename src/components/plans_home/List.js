import React, { Component } from 'react'
//import { Grid, Label } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import moment from 'moment'
import { FitServiceWrapper, FitHeading, HeadingTitle } from '../plans_home/styled'
import Payments from './Payment'
import Card from './PlansItem'
import Auth from "../../config/session"

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
        dateOfExpiration,
      } = plan

      var whenExpires = `${expiration} días`

      if (expiresOnFinalMonth) whenExpires = 'Final del mes'
      if (expiresOnDate) whenExpires = moment(dateOfExpiration).format('DD/MM/YYYY')
      let plansWebActives = [{ id: "5b97155cbbac1015833c4fe8" }, { id: "5b9715a4bbac1015833c4fea" }, { id: "5b971645bbac1015833c4feb" }, { id: "5b97165cbbac1015833c4fed" }];
      if (plansWebActives.some(planWebActive => planWebActive.id == id)) {
        return (
          <Card id={id} name={name} price={price} quantity={price} clases={classes} day={whenExpires} tablet={4} mobile={8} computer={4} key={id} />
        
        )
      }
    })
  }

  render() {
    const renderItems = this.renderItems()

    return (
      
      <FitServiceWrapper id="planes">
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
          <Row>
            <Payments />
          </Row>
        </Container>
    </FitServiceWrapper>
    )
  }
}

export default List
