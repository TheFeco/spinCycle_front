import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Auth from '../../config/session'
import { ExitToApp } from '@material-ui/icons'
import { Avatar, Logo, NavbarContainer, NavbarWrapper, TopLeft, TopRight } from '../styled-component/NavBarStyled'

const avatar = require('../../assets/user.jpg')
const logo = require('../../assets/imgs/logo-oscuro.png')


class NavBar extends Component {
    state = { loading: true, logged: false }

    componentDidMount() {
    this.validateLogin()
    }

    async validateLogin() {
        const response = await Auth.isLogged()
        this.setState({ loading: false, logged: response })
    }
    render() {

    const { history: { push }} = this.props;

    return (
        <NavbarContainer>
          <NavbarWrapper>
              <TopLeft>
                  <Link className="item" to="/" ><Logo>Spincycle</Logo></Link>
              </TopLeft>
              <TopRight>
                {this.state.logged &&(
                   <Link to="/cerrar"> <ExitToApp className='itemicon'  />  </Link>
                )}
              </TopRight>
          </NavbarWrapper>  
        </NavbarContainer>
    );
  }
}
export default withRouter(NavBar);