import React, { Component, Fragment } from 'react'
import { Title } from '../../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { withRouter } from 'react-router'
import { infoUser } from '../../../api/queries/users'
import ListReservations from './ListReservations'

class Detail extends Component {

  componentDidUpdate() {
    // return true
  }

  render() {
    const { location } = this.props

    return (
      <Fragment>
        <Grid>
          <Grid.Column mobile={16} table={8} computer={4}>
            <Title name="Detalle del usuario" />
          </Grid.Column>
        </Grid>

        <Query query={infoUser} variables={{ userId: location.state.userId }} pollInterval={1000}>
          {({ loading, error, data }) => {
              if (loading) return null
              if (error) return null
              if (data) { return (<ListReservations reservations={data.allReservationsByUser} userId={location.state.userId} />)}
            }
          }
        </Query>

      </Fragment>
    )
  }
}

export default withRouter(Detail)
