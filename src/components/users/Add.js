import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { savePlan } from '../../api/mutations/plans'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class Add extends Component {
  state = { open: false, name: '', price: '', classes: '' }

  close = () => {
    this.setState({ open: false })
  }

  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (savePlan) => {
    const { name, price, classes } = this.state

    if (name !== '' && price !== '' && classes !== '') {
      savePlan({
        variables: {
          data: {
            name,
            price,
            class: classes,
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
          <Header content='Agregar un plan' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Nombre</label>
                <input type="text" onChange={(e) => this.write('name', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Costo</label>
                <input type="number" onChange={(e) => this.write('price', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Clases</label>
                <input type="number" onChange={(e) => this.write('classes', e.target.value)} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={savePlan}>
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
