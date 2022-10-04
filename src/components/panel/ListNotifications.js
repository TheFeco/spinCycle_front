import React, { Component, Fragment } from 'react'
import { ListItem, ColorType } from '../controls'
import { Grid } from 'semantic-ui-react'

class ListNotifications extends Component {
  state = { notifications: [] }

  componentDidMount() {
    this.getNotifications()
  }

  getNotifications = () => {
    const { data, rol, userId } = this.props
    var array = []

    const _ = data.allNotifications.map(item => {
      if (rol === 'ADMIN') {
        array.push({
          id: item.id,
          message: item.message,
          type: item.type,
          users: item.users.length
        })
      }
      else {
        const existUser = item.users.filter(user => user.id === userId)

        if (existUser.length > 0) {
          array.push({
            id: item.id,
            message: item.message,
            type: item.type,
            users: item.users.length
          })
        }
      }
    })

    this.setState({ notifications: array })
  }


  renderNotifications = () => {
    const { notifications } = this.state

    const size = notifications.length > 10 ? 10 : notifications.length
    const notifs = notifications.slice(0, size)

    return notifs.map((notification) => {
      return (
        <ListItem key={notification.id}>
          <Grid.Column centered="true" computer={4}>
            <ColorType color={notification.type=== 'RECORDATORY'? 'yellow': 'green'} />
          </Grid.Column>
          <Grid.Column centered="true" computer={12}>
            <span>{notification.message}</span>
          </Grid.Column>
        </ListItem>
      )
    })
  }

  render() {
    const renderNotifications = this.renderNotifications()

    return (
      <Fragment>
        {renderNotifications}
      </Fragment>
    )
  }
}

export default ListNotifications
