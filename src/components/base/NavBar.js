import React from 'react'
import { Avatar, Logo, NavbarContainer,NavbarWrapper, TopLeft, TopRight } from '../styled-component/NavBarStyled'
const avatar = require('../../assets/user.jpg')
const logo = require('../../assets/imgs/logo-oscuro.png')
const NavBar = () => {
  return (
    <NavbarContainer>
          <NavbarWrapper>
              <TopLeft>
                  <Logo>SPINCYCLE</Logo>
              </TopLeft>
              <TopRight>
                  <Avatar src={avatar} alt="avatar" />
              </TopRight>
          </NavbarWrapper>  
    </NavbarContainer>
  )
}
export default NavBar;