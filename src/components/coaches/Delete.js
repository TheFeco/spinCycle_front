import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form, Select } from 'semantic-ui-react'
import { modifyCoach } from '../../api/mutations/coachs'
import { Mutation } from 'react-apollo'
import NotificationSystem from 'react-notification-system';
import moment from 'moment'

class Delete extends Component {
  state = { open: false }

  close = () => {
    this.setState({ open: false })
  }

  open = () => this.setState({ open: true })

  handleSubmit = (modify) => {
    const { id } = this.props

    modify({
      variables: {
        data: {
          status: 'DELETED'
        },
        id
      }
    })

    this.close()
  }

  render() {
    return (
      <Fragment>
        <Button circular color='red' icon='trash' size='mini' onClick={this.open} floated="left" />

        <Modal size="tiny" open={this.state.open}>
          <Header content='Eliminar Entrenador' />
          <Modal.Content>
            ¿Estas seguro que deseas eliminar el registro?
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifyCoach}>
              {modify =>
                <Button
                  negative
                  icon='checkmark'
                  labelPosition='right'
                  content='ELIMINAR'
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

export default Delete
