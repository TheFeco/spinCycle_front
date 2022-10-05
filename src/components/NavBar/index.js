import React, {useState,Fragment} from 'react'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavbarLinkExtended,
    Logo,
    OpenLinkButton
} from '../NavBar/styled';

import LogoImg from '../../assets/imgs/logo-oscuro.png'

const index = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
      <NavbarContainer extendNavbar ={extendNavbar}>
          <NavbarInnerContainer>
              <LeftContainer>
                  <Logo src={LogoImg}></Logo>
                </LeftContainer>
              <RightContainer>
                  
                  <NavbarLinkContainer>
                      <NavbarLink className="item" href='#inicio'>Abaut US</NavbarLink>
                      <NavbarLink className="item" href='#instructores'>Meet the team</NavbarLink>
                      <NavbarLink className="item" href='#palnes'>Paquetes</NavbarLink>
                      <NavbarLink className="item" href='#contacto'>Contacto</NavbarLink>
                      <NavbarLink className="item" href='#Reservar'>Reservar</NavbarLink>
                      <NavbarLink className="item" href='#Reservar'>{(props) => (props.logged ? "Mi cuenta" : "Inicar sesión")}</NavbarLink>
                      <OpenLinkButton onClick={() => { setExtendNavbar((curr) => !curr) }}>
                          {extendNavbar ? <Fragment> &#10005;</Fragment> : <Fragment> &#8801;</Fragment>}
                      </OpenLinkButton>
                  </NavbarLinkContainer>
                </RightContainer>
          </NavbarInnerContainer>
          { extendNavbar &&(
                <NavbarExtendedContainer>
                    <NavbarLinkExtended className="item" href=' #inicio'>Abaut US</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#instructores'>Meet the team</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#palnes'>Paquetes</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#contacto'>Contacto</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#Reservar'>Reservar</NavbarLinkExtended>
                </NavbarExtendedContainer>
              )
          }
    </NavbarContainer>
  )
}
export default index;