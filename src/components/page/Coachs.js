import React from "react"
import { Image, Grid } from 'semantic-ui-react'

const Coach1 = require('../../assets/imgs/coach1.png')
const Coach2 = require('../../assets/imgs/coach2.png')
const Coach3 = require('../../assets/imgs/coach3.png')
const Coach4 = require('../../assets/imgs/coach4.png')
const Coach5 = require('../../assets/imgs/coach5.png')
const Coach6 = require('../../assets/imgs/coach6.png')

const Coach = ({ name, img }) => (
  <Grid.Column computer={4} tablet={8} mobile={12} className="full-width" style={{margin: 'auto', padding: 30}}>
    <Image src={img} fluid circular centered style={{maxWidth: 200, minWidth: 120, paddingBottom: 15}} />
    <label style={{marginTop: 16, fontSize: 16, fontWeigth: 'bold'}}>{name}</label>
  </Grid.Column>
)

const Coachs = () => (
  <div className="full height" id="instructores">
    <div className="ui inverted vertical masthead center aligned segment" style={{ height: '100%' }}>
      <div className="ui container">
        <div className="ui large secondary inverted pointing" style={{ marginTop: 80, paddingBottom: 30 }}>
          <h1 style={{ paddingTop: 20, paddingBottom: 20 }}>INSTRUCTORES</h1>
          <Grid columns={6} style={{textAlign: 'center'}}>
            <Coach img={Coach1} name="SUSY" />
            <Coach img={Coach2} name="LUZEMY" />
            <Coach img={Coach3} name="CARMEN B" />
            <Coach img={Coach4} name="ANDREA" />
            <Coach img={Coach5} name="JULIA" />
            <Coach img={Coach6} name="CARMEN C" />
          </Grid>
        </div>
      </div>
    </div>
  </div>
)

export default Coachs
