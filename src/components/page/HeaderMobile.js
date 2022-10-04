import React, { Component } from 'react';
import {
  Menu,
  Icon,
  Sidebar
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'

class MenuAppMobile extends Component {
  state = { visible: false };

  handleItemClick = () => this.setState({ visible: !this.state.visible });

  render() {
    const { history } = this.props 

    return (
      <div>
        <Menu secondary>
          <Icon
            style={{ position: 'absolute', top: 20, left: 20, zIndex: 1100, color: 'white' }}
            name="bars"
            size="large"
            onClick={this.handleItemClick}
          />

          {this.props.children}
        </Menu>

        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          direction="left"
          visible={this.state.visible}
          icon="labeled"
          vertical
          inverted
        >
          <ul className="menu-responsive">
            <li><AnchorLink className="item-responsive" href='#inicio' onClick={() => this.handleItemClick()}>Spincycle</AnchorLink></li>
            <li><AnchorLink className="item-responsive" href='#planes' onClick={() => this.handleItemClick()}>Planes</AnchorLink></li>
            <li><AnchorLink className="item-responsive" href='#instructores' onClick={() => this.handleItemClick()}>Instructores</AnchorLink></li>
            <li><AnchorLink className="item-responsive" href='#contacto' onClick={() => this.handleItemClick()}>Contacto</AnchorLink></li>
          </ul>
        </Sidebar>
      </div>
    );
  }
}

export default withRouter(MenuAppMobile)
