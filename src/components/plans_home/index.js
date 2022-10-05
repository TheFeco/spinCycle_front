import React, { Component, Fragment } from 'react'
//import { Title } from '../controls'
//import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { allPlans } from '../../api/queries/plans'
import List from './List'

class Plans extends Component {
  state = { reload: '' }

  reload = () => {
    this.setState({ reload: true })
  }

  render() {
    return (
      <Fragment>
        <Query query={allPlans} >
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
