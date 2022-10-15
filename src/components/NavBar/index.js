import React, { useState, Fragment } from 'react'
import { withRouter } from 'react-router'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
   NavbarLinkExtendedTo,
    NavbarLinkExtended,
    Logo,
    OpenLinkButton,
    LoginLinkButton
} from '../NavBar/styled';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/imgs/logo-oscuro.png'

const index = ({ history, islogged }) => {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
      <NavbarContainer extendNavbar ={extendNavbar}>
          <NavbarInnerContainer>
              <LeftContainer>
                  <Logo src={LogoImg}></Logo>
                </LeftContainer>
              <RightContainer>
                  <NavbarLinkContainer>
                      <NavbarLink className="item" href='#instructores'>Meet the team</NavbarLink>
                      <NavbarLink className="item" href='#planes'>Paquetes</NavbarLink>
                      <NavbarLink className="item" href='#contacto'>Contacto</NavbarLink>
                      
                      {islogged &&(
                         
                            <LoginLinkButton onClick={() => history.push('/panel')} >Mi sesión</LoginLinkButton>
                      )}
                      {!islogged &&(
                            <LoginLinkButton onClick={() => history.push('/login')} >Iniciar sesión</LoginLinkButton>
                      )}
                      
                      <OpenLinkButton onClick={() => { setExtendNavbar((curr) => !curr) }}>
                          {extendNavbar ? <Fragment> &#10005;</Fragment> : <Fragment> &#8801;</Fragment>}
                      </OpenLinkButton>
                  </NavbarLinkContainer>
                </RightContainer>
          </NavbarInnerContainer>
          { extendNavbar &&(
                <NavbarExtendedContainer>
                    <NavbarLinkExtended className="item" href='#instructores'>Meet the team</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#palnes'>Paquetes</NavbarLinkExtended>
                    <NavbarLinkExtended className="item" href='#contacto'>Contacto</NavbarLinkExtended>
                  {islogged && ( 
                      <NavbarLinkExtendedTo className="item" onClick={() => history.push('/panel')}>Mi sesión</NavbarLinkExtendedTo>
                  )}
                  {!islogged && (
                      <NavbarLinkExtendedTo className="item" onClick={() => history.push('/login')}>Iniciar sesión</NavbarLinkExtendedTo>
                      )}
                </NavbarExtendedContainer>
              )
          }
    </NavbarContainer>
  )
}
export default withRouter(index);
