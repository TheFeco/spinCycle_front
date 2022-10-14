import React, { Component, Fragment } from 'react'
import { Title, ColorType } from '../controls'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { DAYS } from '../../config/constants'
import { Query } from 'react-apollo'
import { findAllSchedulesByWeek } from '../../api/queries/calendar'
import List from './List'
import moment from 'moment'
import Auth from '../../config/session'

const INIT_CURRENT_DATE = moment().startOf('isoWeek')
const FINISH_CURRENT_DATE = moment().endOf('isoWeek')
const INIT_NEXT_WEEK = (moment().add(1, 'week')).startOf('isoWeek')
const FINISH_NEXT_WEEK = (moment().add(1, 'week')).endOf('isoWeek')

class Reservations extends Component {
  state = {
    date: '',
    days: [],
    userId: '',
    secondWeek: false,
    rol: '',
    day: moment().format('dddd'),
    hour: moment().format('HH'),
    showCalendar: true
  }

  componentDidMount = () => {
    this.currentDate()
    this.getUserId()
    this.validateRol()
  }

  changeShowCalendar = () => {
    this.setState({ showCalendar: !this.state.showCalendar })
  }

  async validateRol() {
    const rol = await Auth.getRol()
    this.setState({ rol })
  }

  getUserId = async () => {
    const userId = await Auth.getUserId()
    this.setState({ userId })
  }

  currentDate = () => {
    const { day, hour } = this.state

    if ((day === 'Saturday' && hour > 12) || day === 'Sunday') {
      const days = this.getDaysOfWeek(INIT_NEXT_WEEK, FINISH_NEXT_WEEK)
      this.setState({ days, secondWeek: true })
    }
    else {
      const days = this.getDaysOfWeek(INIT_CURRENT_DATE, FINISH_CURRENT_DATE)
      this.setState({ days })
    }
  }

  lastWeek = () => {
    const days = this.getDaysOfWeek(INIT_CURRENT_DATE, FINISH_CURRENT_DATE)
    this.setState({ days, secondWeek: false })
  }

  nextWeek = () => {
    const days = this.getDaysOfWeek(INIT_NEXT_WEEK, FINISH_NEXT_WEEK)
    this.setState({ days, secondWeek: true })
  }

  getDaysOfWeek = (init, finish) => {
    var startOfWeek = init
    var endOfWeek = finish

    var days = [];
    var day = startOfWeek;
    var count = 0

    while (day < endOfWeek) {
      if (DAYS[count] !== undefined) {
        days.push({ day: DAYS[count].value, date: moment(day.toDate()).format('YYYY-MM-DD') });
      }

      day = day.clone().add(1, 'd');
      count += 1
    }

    return days
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  render() {
    const { days, secondWeek } = this.state

    return (
      <Fragment>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} table={8} computer={4}>
              <Title name="Reservaciones" />
            </Grid.Column>
            <Grid.Column mobile={16} table={8} computer={3}>
              <ColorType color="black" /> <span className="type__text">Lleno</span>
            </Grid.Column>
            <Grid.Column mobile={16} table={8} computer={3}>
              <ColorType color="gray" /> <span className="type__text">Disponibilidad</span>
            </Grid.Column>
            <Grid.Column mobile={16} table={8} computer={3}>
              <ColorType color="orange" /> <span className="type__text">Reservado por ti</span>
            </Grid.Column>
            <Grid.Column mobile={16} table={8} computer={3}>
              {true &&
                <Fragment>
                  {!secondWeek &&
                    <Button primary floated="right" onClick={() => this.nextWeek()}>
                      <Icon name='angle right' /> Siguente
                    </Button>
                  }
                  {secondWeek &&
                    <Button primary floated="right" onClick={() => this.lastWeek()}>
                      <Icon name='angle left' /> Anterior
                    </Button>
                  }
                </Fragment>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {days.length > 0 &&
          <h4>DEL {moment(days[0].date).format('DD/MM/YYYY')} AL {moment(days[6].date).format('DD/MM/YYYY')}</h4>
        }
        {this.state.userId !== '' &&
          <Fragment>
            {days.length > 0 &&
              <Query
                query={findAllSchedulesByWeek}
                variables={{
                  initialDate: days[0].date,
                  finishDate: days[6].date,
                  userId: this.state.userId
                }}
               	pollInterval={1000}
              >
                {({ loading, error, data }) => {
                    if (loading) return null
                    if (error) return null
                    if (data) { return this.state.showCalendar ? <List
                      calendar={data}
                      rol={this.state.rol}
                      userId={this.state.userId}
                      boughts={data.allSchedulesBoughtsByUser}
                      showCalendar={this.changeShowCalendar}
                      /> : <div style={{ marginTop: 30 }}>Cargando...</div> }
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

export default Reservations
