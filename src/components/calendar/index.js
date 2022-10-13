import React, { Component, Fragment } from 'react'
import { Title } from '../controls'
import { Grid, Button, Icon } from 'semantic-ui-react'
import Week from './List'
import moment from 'moment'
import { DAYS } from '../../config/constants'
import { Mutation, Query } from 'react-apollo'
import { createWeek } from '../../api/mutations/calendar'
import { findAllSchedulesByWeek } from '../../api/queries/calendar'
import Auth from '../../config/session'

const INIT_CURRENT_DATE = moment().startOf('isoWeek')
const FINISH_CURRENT_DATE = moment().endOf('isoWeek')
const INIT_NEXT_WEEK = (moment().add(1, 'week')).startOf('isoWeek')
const FINISH_NEXT_WEEK = (moment().add(1, 'week')).endOf('isoWeek')

class Calendar extends Component {
  state = { days: [], userId: '', secondWeek: false }
  
  componentDidMount = () => {
    this.currentDate()
    this.getUserId()
  }

  getUserId = async () => {
    const userId = await Auth.getUserId()
    this.setState({ userId })
  }

  currentDate = () => {
    const days = this.getDaysOfWeek(INIT_CURRENT_DATE, FINISH_CURRENT_DATE)
    this.setState({ days })
    console.log(days);
  }

  lastWeek = () => {
    const days = this.getDaysOfWeek(INIT_CURRENT_DATE, FINISH_CURRENT_DATE)
    this.setState({ days, secondWeek: false })
  }

  nextWeek = () => {
    const days = this.getDaysOfWeek(INIT_NEXT_WEEK, FINISH_NEXT_WEEK)
    this.setState({ days, secondWeek: true })
  }

  createWeek = (save) => {
    const days = this.getDaysOfWeek(INIT_NEXT_WEEK, FINISH_NEXT_WEEK)

    save({
      variables: {
        data: days
      }
    })
  }

  getDaysOfWeek = (init, finish) => {
    var startOfWeek = init
    var endOfWeek = finish
    
    var days = [];
    var day = startOfWeek;
    var count = 0
    
    while (day < endOfWeek) {
      if (typeof DAYS[count] !== 'undefined') {
        days.push({ day: DAYS[count].value, date: moment(day.toDate()).format('YYYY-MM-DD') });
      }
      day = day.clone().add(1, 'd');
      count += 1
    }

    return days
  }

  render() {
    const { days, secondWeek } = this.state

    return (
      <Fragment>
        {this.state.userId &&
          <Fragment>
            <Grid>
              <Grid.Column mobile={16} table={8} computer={4}>
                <Title name="Calendario" />
              </Grid.Column>
              <Grid.Column mobile={16} table={8} computer={12}>
                {!secondWeek &&
                  <Button primary floated="right" onClick={() => this.nextWeek()}>
                    <Icon name='angle right' /> Siguente semana
                  </Button>
                }
                {secondWeek &&
                  <Button primary floated="right" onClick={() => this.lastWeek()}>
                    <Icon name='angle left' /> Semana anterior
                  </Button>
                }

                <Mutation mutation={createWeek}>
                  {save =>
                    <Button primary floated="right" onClick={() => this.createWeek(save)}>
                      <Icon name='plus' /> Crear Semana
                    </Button>
                  }
                </Mutation>
              </Grid.Column>
            </Grid>

            {days.length > 0 &&
              <h4>DEL {moment(days[0].date).format('DD/MM/YYYY')} AL {moment(days[6].date).format('DD/MM/YYYY')}</h4>
            }

            {days.length > 0 &&
              <Query query={findAllSchedulesByWeek} variables={{ initialDate: days[0].date, finishDate: days[6].date, userId: this.state.userId }} pollInterval={500}>
                {({ loading, error, data }) => {
                    if (loading) return null
                    if (error) return null
                    if (data) { return <Week calendar={data} /> }
                  }
                }
              </Query>
            }
          </Fragment>
        }
      </Fragment>
    )
  }
}

export default Calendar
