import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { allPlans } from '../../api/queries/plans'
import Add from './Add'
import List from './List'

class Plans extends Component {
  state = { reload: '' }

  reload = () => {
    this.setState({ reload: true })
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} table={8} computer={4}>
            <Title name="Planes" />
          </Grid.Column>
          <Grid.Column mobile={16} table={8} computer={12}>
            <Add savePlan={this.savePlan} reload={this.reload} />
          </Grid.Column>
        </Grid>

        <Query query={allPlans} pollInterval={500}>
          {({ loading, error, data }) => {
              if (loading) return null
              if (error) return null
              if (data) { return <List plans={data} /> }
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Plans
