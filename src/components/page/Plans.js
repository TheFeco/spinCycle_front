import React, { Component } from "react"
import { Grid } from 'semantic-ui-react'

const Card = (props) => (
  <Grid.Column {...props}>
    <div className="card">
      <div className="card__header"><span>{props.name}</span></div>
      <div className="card__classes--number">
        <span>{props.quantity}</span>
        <br />
        <span className="card__classes--text">Clases</span>
        <br />
        <span className="card__classes--text">$ {parseFloat(props.price).toFixed(2)}</span>
      </div>
      <div className="card_btn"></div>
    </div>
  </Grid.Column>
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

export default Plans;
