import React, { Component, Fragment } from 'react'
import { Title, ColorType } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import Add from './Add'
import List from './List'
import { allNotifications } from '../../api/queries/notifications'
import Auth from '../../config/session'

const options = [
  { key: '1', text: 'Anuncio', value: 'ANNOUNCEMENT', color:"green", content: <div><ColorType color='green' /> <span className="type__text">Anuncio</span></div> },
  { key: '2', text: 'Recordatorio', value: 'RECORDATORY', color:"yellow", content: <div><ColorType color='yellow' /> <span className="type__text">Recordatorio</span></div> }
]

class Notifications extends Component {
  state = { rol: 'USER', userId: null }

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

  render() {
    const { rol, userId } = this.state

    return (
      <Fragment>
        <Query
          query={allNotifications}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;

            var notifications = data.allNotifications
            if (rol !== 'ADMIN') {
              notifications = notifications.filter(notification => {
                const users = notification.users

                const userNotif = users.filter(user => user.id === userId)
                return userNotif.length > 0
              })
            }

            return (
              <Fragment>
                <Grid>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Title name="Notificaciones" />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={8} >
                    {
                      options.map(item => 
                        <Fragment>
                          <ColorType color={item.color} /> <span className="type__text">{item.text}</span>
                        </Fragment>
                      )
                    }
                  </Grid.Column>
                  
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Add types={options} reload={() => refetch()} rol={rol} />
                  </Grid.Column>
                </Grid>
                
                <List notifications={notifications} rol={rol} />
              </Fragment>
            )}}
        </Query>
      </Fragment>
    )
  }
}

export default Notifications
