import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { MenuItem } from '../controls'
import { connect } from 'react-redux'
import Auth from '../../config/session'
import * as actions from '../../actions/menu'

class Sidebar extends Component {
  state = { rol: '' }

  componentDidMount() {
    this.validateRol()
  }

  async validateRol() {
    const rol = await Auth.getRol()
    this.setState({ rol })
  }

  render() {
    const { location } = this.props

    return (
      <div className="sidebar">
        <MenuItem active={location.pathname === 'panel' ? true : false} name="Panel" icon="home" />
        <MenuItem active={location.pathname === 'notificaciones' ? true : false} name="Notificaciones" icon="bell outline" />
        <MenuItem active={location.pathname === 'reservaciones' ? true : false} name="Reservaciones" icon="calendar check outline" />
        <MenuItem active={location.pathname === 'paquetes' ? true : false} name="Paquetes" icon="dollar sign" />
        {this.state.rol === 'ADMIN' &&
          <Fragment>
            <MenuItem active={location.pathname === 'calendario' ? true : false} name="Calendario" icon="calendar alternate outline" />
            <MenuItem active={location.pathname === 'instructores' ? true : false} name="Instructores" icon="child" />
            <MenuItem active={location.pathname === 'planes' ? true : false} name="Planes" icon="tags" />
            <MenuItem active={location.pathname === 'horarios' ? true : false} name="Horarios" icon="clock outline" />
            <MenuItem active={location.pathname === 'usuarios' ? true : false} name="Usuarios" icon="users" />
          </Fragment>
        }

        <MenuItem active={false} name="Cerrar" />
      </div>
    )
  }
}

export default connect(null, actions)(withRouter(Sidebar))
