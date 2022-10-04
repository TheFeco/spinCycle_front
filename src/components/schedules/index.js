import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import AddModal from './AddModal'
import List from './List'
import { allSchedules } from '../../api/queries/schedules'

class Schedules extends Component {
  state = { schedules: [] }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} table={8} computer={4}>
            <Title name="Horarios" />
          </Grid.Column>
          <Grid.Column mobile={16} table={8} computer={12}>
            <AddModal saveOrder={this.saveOrder} />
          </Grid.Column>
        </Grid>

        <Query query={allSchedules} pollInterval={500}>
          {({ loading, error, data }) => {
              if (loading) return null
              if (error) return null
              if (data) { return <List schedules={data} /> }
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Schedules
