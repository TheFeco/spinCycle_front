import React, { Component, useState } from "react"
import { Grid } from 'semantic-ui-react'
import { Col } from 'react-awesome-styled-grid'
import { FitPriceBox } from '../plans_home/styled'
import Auth from "../../config/session"





const Card = (props) => {
  const [count, setCount] = useState(0);
  const [logged, setLogged] = useState();
  
  const handleClick = (e, datos) => {
    // 👇️ refers to the div element
    const isLogged = validateLogin();
    console.log(logged)
    console.log(datos);
  }
  const validateLogin = async () => {
    
    const response = await Auth.isLogged()
    setLogged(response)
  }
  return (
    <Col lg={3} md={2} sm={4} {...props}>
      <FitPriceBox onClick={e => handleClick(e, props)}>
        <h1>{props.clases} {(props.clases > 1) ? " CLASES" : " CLASE"}</h1>
        <h2>$ {parseFloat(props.price).toFixed(2)}</h2>
        <p>Expira en {props.day}</p>
      </FitPriceBox>
    </Col>
  )
}


const Plans = (props) => (
  <div id="planes" className="full height plans">
    <div className="plans__content">
      <h1 className="subheader">CONOCE NUESTROS PLANES</h1>
      <Grid columns={6}>
        <Grid.Row>
          <Card name="Paquete 1" price={160} quantity={1} {...props} />
          <Card name="Paquete 5" price={750} quantity={5} {...props} />
          <Card name="Paquete 10" price={1400} quantity={10} {...props} />
          <Card name="Paquete 20" price={2600} quantity={20} {...props} />
          <Card name="Paquete 30" price={3600} quantity={30} {...props} />
          <Card name="Paquete 40" price={4000} quantity={40} {...props} />
        </Grid.Row>
      </Grid>
    </div>
  </div>
)

export default Card;
