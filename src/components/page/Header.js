import React from "react"
import { withRouter } from 'react-router'
import { Button } from "semantic-ui-react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Logo = require('../../assets/imgs/logo2.png')

const Header = ({ history, menuVisible }) => (
  <div className="full height full-screen" id="inicio">
    <div className="ui inverted vertical masthead center aligned segment full-screen header__bg">
      <div className="ui container">
        <div className="logo">
          <img src={Logo} />
        </div>
        {menuVisible &&
          <div className="ui large secondary inverted pointing menu__large">
            <AnchorLink className="item" href='#inicio'>Spincycle</AnchorLink>
            <AnchorLink className="item" href='#planes'>Planes</AnchorLink>
            <AnchorLink className="item" href='#instructores'>Instructores</AnchorLink>
            <AnchorLink className="item" href='#contacto'>Contacto</AnchorLink>
            <div className="right item__right">
              <Button inverted onClick={() => history.push('/login')}>Inicia sesión</Button>
            </div>
          </div>
        }

      </div>

      <div className="phrase__content">
        YOUR <br /> ONLY <br /> LIMIT IS <br /> YOU
      </div>

      {!menuVisible &&
        <div className="right item__right" style={{ zIndex: 1000, marginLeft: 60, marginTop: 30 }}>
          <Button inverted onClick={() => history.push('/login')}>Inicia sesión</Button>
        </div>
      }
    </div>
  </div>
)

export default withRouter(Header)
