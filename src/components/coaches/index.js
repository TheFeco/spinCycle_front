import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { allCoachs } from '../../api/queries/coachs'
import Add from './Add'
import List from './List'

class Coaches extends Component {

  saveCoach = () => {
    
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} table={8} computer={4}>
            <Title name="Instructores" />
          </Grid.Column>
          <Grid.Column mobile={16} table={8} computer={12}>
            <Add saveCoach={this.saveCoach} />
          </Grid.Column>
        </Grid>

        <Query query={allCoachs} pollInterval={500}>
          {({ loading, error, data }) => {
              if (loading) return null
              if (error) return null
              if (data) { return <List coachs={data} reload={this.reload} /> }
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Coaches
