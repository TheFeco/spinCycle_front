import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Select } from 'semantic-ui-react'
import { modifySchedule } from '../../api/mutations/schedules'
import { Mutation } from 'react-apollo'
import { AddButton } from '../controls'
import { DAYS, AMPM } from '../../config/constants'
import NotificationSystem from 'react-notification-system';
import moment from 'moment'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      hour: props.schedule.hour,
      order: props.schedule.order,
      day: (props.schedule.day).toLowerCase(),
      ampm: props.schedule.ampm || 'AM'
    }
  }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (modifySchedule) => {
    const { saveOrder, schedule } = this.props
    const { hour, order, day, ampm } = this.state

    if (day !== '' && hour !== '' && order !== 0) {
      modifySchedule({
        variables: {
          data: {
            day,
            hour,
            order,
            ampm
          },
          id: schedule.id
        }
      })

      this.close()
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'por favor verifique que los campos se hayan llenado correctamente',
        level: 'warning'
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Button circular color='grey' icon='pencil' size='mini' onClick={this.open} floated="left" />

        <Modal size="tiny" open={this.state.open}>
          <Header content='Editar un horario' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <Select placeholder='Selecciona el día' defaultValue={this.state.day} options={DAYS} onChange={(e, { value }) => this.write('day', value)} />
              </Form.Field>
              <Form.Field>
                <label>Hora</label>
                <input type="text" value={this.state.hour} onChange={(e) => this.write('hour', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Select placeholder='Selecciona horario' defaultValue={this.state.ampm} options={AMPM} onChange={(e, { value }) => this.write('ampm', value)} />
              </Form.Field>
              <Form.Field type="number">
                <label>Número en que aparece en la lista</label>
                <input type="number" value={this.state.order} onChange={(e) => this.write('order', e.target.value)} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifySchedule}>
              {save =>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Guardar'
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

export default Edit
