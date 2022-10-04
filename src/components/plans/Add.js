import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Checkbox, Dropdown } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { DateInput } from 'semantic-ui-calendar-react';
import { savePlan } from '../../api/mutations/plans'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class Add extends Component {
  state = {
    open: false,
    name: '',
    price: '',
    classes: '',
    expiration: '',
    isUnlimited: false,
    type_expiration: null,
    date_expires: ''
  }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (savePlan) => {
    const { name, price, classes, expiration, isUnlimited, type_expiration, date_expires } = this.state

    const validation = this.validations()

    if (validation.success) {
      savePlan({
        variables: {
          data: {
            name,
            price,
            class: isUnlimited ? 0 : classes,
            isUnlimited,
            expiration: type_expiration !== 'days' ? 0 : expiration,
            expiresOnFinalMonth: type_expiration === 'final_month',
            expiresOnDate: type_expiration === 'date',
            dateOfExpiration: type_expiration === 'date' ? date_expires.split('-').reverse().join('-') : null,
            created: moment().format('YYYY-MM-DD')
          }
        }
      })

      this.close()
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: validation.msg,
        level: 'warning'
      });
    }
  }

  validations = () => {
    const {
      name,
      price,
      classes,
      expiration,
      isUnlimited,
      type_expiration,
      date_expires
    } = this.state

    if (!name) {
      return { success: false, msg: 'Debe especificar un nombre' }
    }

    if (!price) {
      return { success: false, msg: 'Debe especificar un precio' }
    }

    if (!classes && !isUnlimited) {
      return { success: false, msg: 'Debe especificar un número de clases' }
    }

    if (type_expiration === 'days' && !expiration) {
      return { success: false, msg: 'Debe especificar el número de días a expirar' }
    } 

    if (type_expiration === 'date' && !date_expires) {
      return { success: false, msg: 'Debe especificar la fecha a expirar' }
    }

    return { success: true, msg: '' }
  }

  render() {
    const { isUnlimited, type_expiration, date_expires } = this.state

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
                <label></label>
                <Checkbox label='Es paquete ilimitado' onChange={(e, { checked }) => this.setState({ isUnlimited: checked })} />
              </Form.Field>
              {!isUnlimited && 
                <Form.Field>
                  <label>Clases</label>
                  <input type="number" onChange={(e) => this.write('classes', e.target.value)} />
                </Form.Field>
              }
              
              <Form.Field>
                <label>Tipo de expiración</label>
                <Dropdown
                  placeholder='Selecciona una opción'
                  fluid
                  selection
                  onChange={(e, { value }) => this.setState({ type_expiration: value })}
                  options={[
                    { key: 'days', text: 'Número de días', value: 'days' },
                    { key: 'final_month', text: 'Al final del mes', value: 'final_month' },
                    { key: 'date', text: 'Fecha preestablecida', value: 'date' }
                  ]}
                />
              </Form.Field>
              
              {type_expiration === 'days' &&
                <Form.Field>
                  <label>Vence en (<small>días</small>)</label>
                  <input type="number" onChange={(e) => this.write('expiration', e.target.value)} />
                </Form.Field>
              }

              {type_expiration === 'date' && 
                <Form.Field>
                  <label>Vence en (<small>fecha</small>)</label>
                  <DateInput
                    name="date"
                    placeholder="Date"
                    value={date_expires}
                    iconPosition="left"
                    onChange={(e, { value }) => this.write('date_expires', value)}
                  />
                </Form.Field>
              }
              
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
