import React, { Component } from 'react'
import App from './components/App'
import Home from './components/home'
import Login from './components/login'
import Panel from './components/panel'
import Notifications from './components/notifications'
import Reservations from './components/reservations'
import Boughtpacks from './components/boughtpacks'
import Calendar from './components/calendar'
import Coaches from './components/coaches'
import Plans from './components/plans'
import Schedules from './components/schedules'
import Users from './components/users'
import Detail from './components/users/detail/Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class RoutesApp extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <App>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={Login} />
            <Route path="/panel" component={Panel} />
            <Route path="/notificaciones" component={Notifications} />
            <Route path="/reservaciones" component={Reservations} />
            <Route path="/paquetes" component={Boughtpacks} />
            <Route path="/calendario" component={Calendar} />
            <Route path="/instructores" component={Coaches} />
            <Route path="/planes" component={Plans} />
            <Route path="/horarios" component={Schedules} />
            <Route path="/usuarios" component={Users} />
            <Route path="/usuarios-detalle" component={Detail} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default RoutesApp;
