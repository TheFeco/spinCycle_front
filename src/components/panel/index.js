import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid, Header } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import ListReservations from './ListReservations'
import ListNotifications from './ListNotifications'
import { allReservations } from '../../api/queries/calendar'
import Auth from '../../config/session'

class Panel extends Component {
  state = { date: '', rol: '', userId: '' }

  componentDidMount() {
    this.validateRol()
    this.getUserId()
  }

  async validateRol() {
    const rol = await Auth.getRol()
    this.setState({ rol })
  }

  async getUserId() {
    const userId = await Auth.getUserId()
    this.setState({ userId })
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  loadData = (userId, rol) => (<Grid>
    <Grid.Row>
      <Grid.Column mobile={16} table={8} computer={10}>
        <Title name="Reservaciones" />
      </Grid.Column>
      <Grid.Column mobile={16} table={8} computer={6}>
        <Title name="Notificaciones" />
      </Grid.Column>
    </Grid.Row>
    
    <Query query={allReservations}>
      {({ loading, error, data, refetch }) => {
        if (loading) return null
        if (error) return null
        if (data) { return (
          <Grid.Row>
            <Grid.Column mobile={16} table={8} computer={10}>
              <Grid className="grid__reservations">
                <Grid.Column mobile={16} table={8} computer={16}>
                  <ListReservations data={data} userId={userId} rol={rol} refetch={() => refetch()} />     
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column mobile={16} table={8} computer={6}>
              <ListNotifications data={data} userId={userId} rol={rol} />
            </Grid.Column>
          </Grid.Row>
        )}}
      }
    </Query>
  </Grid>)

  render() {
    const { userId, rol } = this.state

    return (
      <Fragment>
        {userId &&
          this.loadData(userId, rol)
        }
      </Fragment>
    )
  }
}

export default Panel
