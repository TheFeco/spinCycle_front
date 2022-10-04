import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Checkbox } from 'semantic-ui-react'
import { AddButton } from '../controls'
import { Mutation } from 'react-apollo'
import { modifyCalendar } from '../../api/mutations/calendar'
import NotificationSystem from 'react-notification-system';

class Add extends Component {
  state = { coach: '', checked: false }

  handleSubmit = (save) => {
    const { coach, checked } = this.state

    if (coach !== '') {
      save({
        variables: {
          data: {
            coach: { _id: coach },
            isOpen: !checked
          },
          id: this.props.calendarId
        }
      })

      this.props.close()
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'Para guardar debe de seleccionar un Entrenador',
        level: 'warning'
      });
    }
  }

  getDataCoachs = () => {
    const { coachs } = this.props
    return coachs.map(coach => { return { key: coach.id, text: coach.name, value: coach.id }})
  }

  checked = () => {
    const { checked } = this.state
    this.setState({ checked: !checked })
  }

  render() {
    const coachs = this.getDataCoachs()

    return (
      <Fragment>
        <Modal size="tiny" open={this.props.open}>
          <Header content='Elegir coach' />
          <Modal.Content>
            <Form>
              <Form.Select
                fluid
                label='Coach'
                options={coachs}
                placeholder='Coach'
                onChange={(e, { value }) =>
                  this.setState({ 'coach': value }
                )}
              />
              <Form.Field>
                <Checkbox label='Cerrar clase' checked={this.state.checked} onChange={() => this.checked()} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.props.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifyCalendar}>
              {save =>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Aceptar'
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
