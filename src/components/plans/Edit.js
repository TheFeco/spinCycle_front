import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import NotificationSystem from 'react-notification-system';
import { modifyPlan } from '../../api/mutations/plans'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      name: props.plan.name,
      price: props.plan.price,
      classes: props.plan.class,
      expiration: props.plan.expiration,
    }
  }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (modify) => {
    const { name, price, classes, expiration } = this.state

    if (name !== '' && price !== '' && classes !== '' && expiration !== '') {
      modify({
        variables: {
          data: {
            name,
            price,
            class: classes,
            expiration,
          },
          id: this.props.plan.id
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
    const { name, price, classes, expiration } = this.state

    return (
      <Fragment>
        <Button circular color='grey' icon='pencil' size='mini' onClick={this.open} floated="left" />

        <Modal size="tiny" open={this.state.open}>
          <Header content='Editar plan' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => this.write('name', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Costo</label>
                <input type="number" value={price} onChange={(e) => this.write('price', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Clases</label>
                <input type="number" value={classes} onChange={(e) => this.write('classes', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Vence en (<small>días</small>)</label>
                <input type="number" value={expiration} onChange={(e) => this.write('expiration', e.target.value)} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifyPlan}>
              {modify =>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Editar'
                  onClick={() => this.handleSubmit(modify)}
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
