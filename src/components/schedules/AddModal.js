import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Select } from 'semantic-ui-react'
import { saveSchedule } from '../../api/mutations/schedules'
import { Mutation } from 'react-apollo'
import { DAYS } from '../../config/constants'
import NotificationSystem from 'react-notification-system';
import moment from 'moment'

class AddModal extends Component {
  state = { open: false, hour: '', order: '', day: '' }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (saveSchedule) => {
    const { hour, order, day } = this.state

    if (day !== '' && hour !== '' && order !== 0) {
      saveSchedule({
        variables: {
          data: {
            day,
            order,
            hour,
            created: moment().format('YYYY-MM-DD')
          }
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
        <Button primary floated="right" onClick={this.open}>
          <Icon name='plus' /> Agregar
        </Button>

        <Modal size="tiny" open={this.state.open}>
          <Header content='Agregar un horario' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <Select placeholder='Selecciona el día' options={DAYS} onChange={(e, { value }) => this.write('day', value)} />
              </Form.Field>
              <Form.Field>
                <label>Hora</label>
                <input type="text" onChange={(e) => this.write('hour', e.target.value)} />
              </Form.Field>
              <Form.Field type="number">
                <label>Número en que aparece en la lista</label>
                <input type="number" onChange={(e) => this.write('order', e.target.value)} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={saveSchedule}>
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

export default AddModal
