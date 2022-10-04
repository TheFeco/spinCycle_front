import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { allUsers } from '../../api/queries/users'
import Add from './Add'
import List from './List'

class Users extends Component {
  state = { reload: '' }

  reload = () => {
    this.setState({ reload: true })
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} table={8} computer={4}>
            <Title name="Usuarios" />
          </Grid.Column>
          <Grid.Column mobile={16} table={8} computer={12}>
          </Grid.Column>
        </Grid>

        <Query query={allUsers} pollInterval={1000}>
          {({ loading, error, data }) => {
              if (loading) return null
              if (error) return null
              if (data) { return <List users={data.allUsers} /> }
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Users
