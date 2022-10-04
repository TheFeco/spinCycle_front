import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { modifySchedule } from '../../api/mutations/schedules'
import { Mutation } from 'react-apollo'
import NotificationSystem from 'react-notification-system';
import moment from 'moment'

class Delete extends Component {
  state = { open: false }

  close = () => {
    this.setState({ open: false })
  }

  open = () => this.setState({ open: true })

  handleSubmit = (modifySchedule) => {
    const { id } = this.props

    modifySchedule({
      variables: {
        data: {
          status: 'DELETED'
        },
        id
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Button circular color='red' icon='trash' size='mini' onClick={this.open} floated="left" />

        <Modal size="tiny" open={this.state.open}>
          <Header content='Eliminar horario' />
          <Modal.Content>
            ¿Estas seguro que deseas eliminar el registro?
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifySchedule}>
              {save =>
                <Button
                  negative
                  icon='checkmark'
                  labelPosition='right'
                  content='Eliminar'
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

export default Delete
