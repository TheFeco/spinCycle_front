import React, { Component, Fragment } from 'react'
import Menu from './base/Menu'
import Sidebar from './base/Sidebar'
import Auth from '../config/session'
import Login from './login'
//import Header from './page/Header'
import Hero from './hero_home'
//import HeaderMobile from './page/HeaderMobile'
import Coachs from './coaches_home'
import Footer from './page/Footer'
//import Plans from './page/Plans'
import Plans from './plans_home'
import Navbar from './NavBar'
import { Container, Responsive, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import 'swiper/swiper.min.css'
import '../assets/css/main.css'
import '../assets/css/spincycle.css'
import { Query } from 'react-apollo'
import { allPlans } from '../api/queries/plans';


class App extends Component {
  state = { loading: true, logged: false }

  componentDidMount() {
    this.validateLogin()
  }

  async validateLogin() {
    const response = await Auth.isLogged()
    this.setState({ loading: false, logged: response })
  }

  renderLogin = () => {
    return (
      <Fragment>
        <Grid>
          <Grid.Column className="menu__app">
            <Menu />
          </Grid.Column>
        </Grid>
        <Login />
      </Fragment>
    )
  }

  renderLanding = () => {
    return (
      <div className="pusher">
        {/*<Responsive {...Responsive.onlyMobile} className="appContainer">
          <HeaderMobile>
            <Header menuVisible={false} />
            <Plans />
            <Coachs />
            <Footer />
          </HeaderMobile>
        </Responsive>
    <Responsive minWidth={Responsive.onlyTablet.minWidth} className="appContainer">*/}
        {/*<Header menuVisible={true} />*/}
        <Responsive className="appContainer">
          <Navbar logged={this.statelogged} />
          <Hero />
          <Plans />
          <Coachs />
          <Footer />
        </Responsive>
      </div>
    )
  }

  renderContent = () => {
    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={16} className="menu__app">
            <Menu />
          </Grid.Column>
        </Grid>
        <Grid style={{marginTop: 50}}>
          <Grid.Column mobile={0} tablet={4} computer={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={13}>
            <Container className="container">
              {this.props.children}
            </Container>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }

  render() {
    const { location } = this.props
    const { loading, logged } = this.state

    var renderView = this.renderLanding()

    if (location.pathname !== '/') {
      if (location.pathname === '/login' || location.pathname === '/registro' || !logged) {
        renderView = this.renderLogin()
      }
      else {
        renderView = this.renderContent()
      }
    }

    if (location.pathname === '/cerrar') {
      Auth.logout()
      window.location.href = '/'
    }

    return (
      <section className="app">
        {loading &&
          <span>cargando...</span>
        }
        {!loading &&
          <Fragment>
            {renderView}
          </Fragment>
        }
      </section>
    )
  }
}

export default withRouter(App)
