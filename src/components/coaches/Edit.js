import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import NotificationSystem from 'react-notification-system';
import { modifyCoach } from '../../api/mutations/coachs'
import { GENDER } from '../../config/constants'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      name: props.coach.name,
      gender: props.coach.gender,
      review: props.coach.review
    }
  }

  close = () => {
    this.setState({ open: false })
  }

  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (modify) => {
    const { name, gender, review } = this.state

    if (name !== '') {
      modify({
        variables: {
          data: {
            name,
            gender,
            review
          },
          id: this.props.coach.id
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
    const { name, gender, review } = this.state

    return (
      <Fragment>
        <Button circular color='grey' icon='pencil' size='mini' onClick={this.open} floated="left" />

        <Modal size="tiny" open={this.state.open}>
          <Header content='Editar Entrenador' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => this.write('name', e.target.value)} />
              </Form.Field>
              <Form.Select
                fluid
                label='Sexo'
                options={GENDER}
                placeholder='Sexo'
                defaultValue={gender}
                onChange={(e, { value }) => this.write('gender', value)}
                />
              <Form.TextArea label='Reseña' value={review} placeholder='Escribe algo...' onChange={(e) => this.write('review', e.target.value)} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={modifyCoach}>
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
