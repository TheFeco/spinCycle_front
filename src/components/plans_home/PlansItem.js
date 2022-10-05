import React, { Component } from "react"
import { Grid } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

const handleClick = (e,datos) => {
    // 👇️ refers to the div element
    console.log(datos);
  }

const Card = (props) => (
  <Col lg={3} sm={6} {...props}>
    <div className="fit_servicebox" onClick={e => handleClick(e,props)}>
          <h1>{props.name}</h1>
          <h2>$ {parseFloat(props.price).toFixed(2)}</h2>
          <p>Expira en {props.day}</p>
      </div>
  </Col>
)

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
