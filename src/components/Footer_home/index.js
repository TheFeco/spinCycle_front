import React from "react";
import { Image} from 'semantic-ui-react'
const Logo = require('../../assets/imgs/Logo_1.png')

const Footer = () => (
  <div className="full height footer">
    <div className="deep__footer" style={{ color: 'white' }}>
      <em>Spincycle - Todos los derechos reservados</em>
      <Image src={Logo} style={{height: 20, float: 'right', marginRight: 30}} />
    </div>
  </div>
)

export default Footer