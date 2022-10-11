import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Phone, Room, Mail } from "@material-ui/icons";
import { ContactText, MapResponsive } from './styled'

const Contact = () => {

    const url =  "https://goo.gl/maps/Y3gszDEfkB3ij8Qz5"

    const handleClick = event => {
        window.location.replace(url)
    }

  return (
      <div className='contact-section' id="contacto">
          <Grid fluid>
              <Row>
                  <Col md={12}>
                      <MapResponsive>
                        <iframe
                            width="100%" 
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            onDoubleClick={handleClick}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.9114620491185!2d-107.39356987079282!3d24.739035917029625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd14ee7d84639%3A0x5fa3bbe77e61e5a7!2sEdificio%20mixto!5e0!3m2!1ses-419!2smx!4v1665278378682!5m2!1ses-419!2smx"
                        />
                    </MapResponsive>
                  </Col>
              </Row>
              <Row >
                  <Col md={4}>
                      <ContactText>
                          <Room className='fit-icon'/>
                          <p className='fit-iconText'>La Primavera/ Edificio Mixto,<br/> Local 101-29</p>
                      </ContactText>
                  </Col>
                  <Col md={4}>
                      <ContactText>
                          <Phone className='fit-icon' />
                          <p className='fit-iconText'>6672 13 88 21</p>
                      </ContactText>
                  </Col>
                  <Col md={4}>
                      <ContactText>
                          <Mail className='fit-icon' />
                          <p className='fit-iconText'>spincycle@hotmail.com</p>
                      </ContactText>
                  </Col>
              </Row>
          </Grid>
    </div>
  )
}

export default Contact