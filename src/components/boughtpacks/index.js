import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { allUserAndPlans, allBoughtsByUser } from '../../api/queries/plans'
import Add from './Add'
import List from './List'
import Auth from '../../config/session'

class Boughtpacks extends Component {
  state = { rol: '', userId: '' }

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

  renderAll = () => {
    return (
      <Query query={allUserAndPlans}>
        {({ loading, error, data }) => {
	console.log({data})
            if (loading) return null
            if (error) return null
            if (data) {
              const users = data.allUsers.map(user => {
                return { id: user.id, name: user.name, user: user.user, isLoading: false }
              })

              return (
                <Fragment>
                  <Grid>
                    <Grid.Column mobile={16} table={8} computer={4}>
                      <Title name="Paquetes" />
                    </Grid.Column>
                    <Grid.Column mobile={16} table={8} computer={12}>
                      {this.state.rol === 'ADMIN' &&
                        <Add saveCoach={this.saveCoach} users={users} plans={data.allPlans} />
                      }
                    </Grid.Column>
                  </Grid>
                  <List users={users} plans={data.allPlans} boughts={data.allSchedulesBoughts} />
                </Fragment>
              )
            }
          }
        }
      </Query>
    )
  }

  renderByUser = () => {
    return (
      <Query query={allBoughtsByUser} variables={{ userId: this.state.userId }} pollInterval={1000}>
        {({ loading, error, data }) => {
            if (loading) return null
            if (error) return null
            if (data) {
              const users = []

              return (
                <Fragment>
                  <Grid>
                    <Grid.Column mobile={16} table={8} computer={4}>
                      <Title name="Paquetes" />
                    </Grid.Column>
                    <Grid.Column mobile={16} table={8} computer={12}>
                      {this.state.rol === 'ADMIN' &&
                        <Add saveCoach={this.saveCoach} users={users} plans={data.allPlans} />
                      }
                    </Grid.Column>
                  </Grid>
                  <List users={users} plans={[]} boughts={data.allSchedulesBoughtsByUser} />
                </Fragment>
              )
            }
          }
        }
      </Query>
    )
  }

  render() {
    var renderView = this.state.rol !== 'ADMIN' ? this.renderByUser() : this.renderAll()

    return (
      <Fragment>
        {this.state.userId &&
          <Fragment>
            {renderView}
          </Fragment>
        }
      </Fragment>

    )
  }
}

export default Boughtpacks
