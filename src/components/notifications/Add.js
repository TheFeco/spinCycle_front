import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import moment from 'moment'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { DropdownRemote } from '../controls'
import { addNotification } from '../../api/mutations/notifications'
import { allUsersCombo } from '../../api/queries/users'
import { withApollo, Mutation } from 'react-apollo'

class Add extends Component {
  state = { open: false, type: '', to: '', message: '', usersOption: [] }

  componentDidMount() {
    this.props.client.query({ query: allUsersCombo }).then(resp => {
      this.setState({ usersOption: resp.data.allUsers })
    }, err => {
      this.refs.notificationSystem.addNotification({
        message: '¿y los ususarios?',
        level: 'error'
      });
    })
  }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (addNotification) => {
    const { type, to, message } = this.state
    if (type !== '' && message !== '' && to.length) {
      const users = to.map(_id => { return { _id }})

      addNotification({
        variables: {
          data: {
            type,
            users,
            message,
            created: moment().format('YYYY-MM-DD')
          }
        }
      }).then(response => {
        if (response) {
          setTimeout(() => this.props.reload(), 3000)

          // fetch('http://localhost:3001/api/send-notification', {
          //   method: "POST",
          //   body: JSON.stringify({ users, type, message }),
          //   headers: {
          //   "content-type": "application/json"
          //   }
          // })

          this.close()
        }
      })
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'Por favor verifique que los campos se hayan llenado correctamente',
        level: 'warning'
      });
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.rol === 'ADMIN' &&
          <Button primary floated="right" onClick={this.open}>
            <Icon name='plus' /> Agregar
          </Button>
        }

        <Modal size="tiny" open={this.state.open}>
          <Header content='Agregar notificación' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Destinatarios</label>
                <DropdownRemote
                  options={this.state.usersOption}
                  placeHolder='Seleccione'
                  handleChange={(value) => this.write('to', value)}
                />
              </Form.Field>
              <Form.Select fluid 
                label='Tipo de notificación' 
                options={this.props.types} 
                placeholder='Tipo'
                onChange={(e, { value }) => this.write('type', value)}
              />
              <Form.TextArea 
                label='Mensaje' 
                placeholder='Escribe algo...'
                onChange={(e, { value }) => this.write('message', value)}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={addNotification}>
              {send =>
                <Button
                  positive
                  icon='send'
                  labelPosition='right'
                  content='Enviar'
                  onClick={() => this.handleSubmit(send)}
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


Add.propTypes = {
  types: PropTypes.array.isRequired
}

export default withApollo(Add)
