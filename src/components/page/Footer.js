import React from "react";
import { Image, Grid, Icon } from 'semantic-ui-react'
const Map = require('../../assets/imgs/address.png')
const Logo = require('../../assets/imgs/Logo_1.png')

const Footer = () => (
  <div className="full height footer" id="contacto">
    <Grid columns={2}>
      <Grid.Column computer={8} tablet={16} mobile={16} style={{ padding: 20 }}>
        <Image src={Map} fluid centered style={{ maxWidth: 500 }} />
      </Grid.Column>
      <Grid.Column computer={8} tablet={16} mobile={16} style={{paddingTop: 50, minHeight: 300, paddingLeft: 16}}>
        <div className="social__instagram" style={{ marginLeft: 10, marginBottom: 30 }}>
          <a href="https://www.instagram.com/spincyclemx/" >
            <Icon name="instagram" color="orange" size="large" /> /spincyclemx
          </a>
        </div>
        <small className="dir__label">Dirección</small>
        <address className="dir__ubication">
          Edificio Mixto <br />
          Local 101-29 /
          La Primavera <br />
          <Icon name="phone" /> 7 44 01 27
        </address>
      </Grid.Column>
    </Grid>
    <div className="deep__footer" style={{ color: 'white' }}>
      <em>Spincycle - Todos los derechos reservados</em>
      <Image src={Logo} style={{height: 20, float: 'right', marginRight: 30}} />
    </div>

  </div>
)

export default Footer
