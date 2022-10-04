import _ from 'lodash';
import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Search } from 'semantic-ui-react'
import { AddButton } from '../controls'
import { Mutation } from 'react-apollo'
import { saveBought } from '../../api/mutations/boughts'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class Add extends Component {
  state = { open: false, plan: '', isLoading: false, results: [], valueSelected: [], value: '' }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (saveBought) => {
    const { value, valueSelected, plan } = this.state
    const { plans } = this.props
    const planSelected = plans.filter(pl => pl.id === plan)[0]

    const classes = planSelected.isUnlimited ? 1500 : planSelected.class

    if (value !== '' && plan !== '') {
      saveBought({
        variables: {
          data: {
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
            prince: planSelected.price,
            quantity: classes,
            availables: classes,
            user: { _id: valueSelected.id },
            plan: { _id: plan }
          }
        }
      })

      this.close()
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'Por favor verifique que los campos se hayan llenado correctamente',
        level: 'warning'
      });
    }
  }

  handleSearchChange = (e, { value }) => {
    const { users } = this.props
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (value < 1) return this.setState({ results: users, isLoading: false });

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(users, isMatch),
      })
    }, 300)
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name, valueSelected: result })
  }

  renderPlans = () => {
    const { plans } = this.props
    return plans.map(plan => { return { key: plan.id, text: plan.name, value: plan.id }})
  }

  render() {
    const renderPlans = this.renderPlans()
    const { results, value, isLoading } = this.state

    return (
      <Fragment>
        <Button primary floated="right" onClick={this.open}>
          <Icon name='plus' /> Agregar
        </Button>

        <Modal size="tiny" open={this.state.open}>
          <Header content='Compra de un paquete' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <Search
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                  results={results}
                  resultRenderer={({ id, name, user }) => [
                    <div key={id} className='content'>
                      {name && <div className="title">{name}</div>}
                      {user && <div>{user}</div>}
                    </div>,
                  ]}
                  value={value}
                  title="Usuario"
                  {...this.props}
                />
              </Form.Field>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Paquete'
                  options={renderPlans}
                  placeholder='Paquete'
                  onChange={(e, { value }) => this.setState({ 'plan': value })} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={saveBought}>
              {save =>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Agregar'
                  onClick={() => this.handleSubmit(save)}
                  />
              }
            </Mutation>
          </Modal.Actions>
        </Modal>
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    )
  }
}

export default Add
