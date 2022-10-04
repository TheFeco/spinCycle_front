import React, { Component, Fragment } from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'
import { saveCoach } from '../../api/mutations/coachs'
import { Mutation } from 'react-apollo'
import { GENDER } from '../../config/constants'
import NotificationSystem from 'react-notification-system';
import moment from 'moment'



class Add extends Component {
  state = { open: false, name: '', gender: '', review: '' }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  write = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (saveCoach) => {
    const { name, gender, review } = this.state

    if (name !== '' && gender !== '') {
      saveCoach({
        variables: {
          data: {
            name,
            gender,
            review,
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
          <Header content='Agregar un Coach' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Nombre</label>
                <input type="text" onChange={(e) => this.write('name', e.target.value)} />
              </Form.Field>
              <Form.Select
                fluid
                label='Sexo'
                options={GENDER}
                placeholder='Sexo'
                onChange={(e, { value }) => this.write('gender', value)}
                />
              <Form.TextArea label='Reseña' placeholder='Escribe algo...' onChange={(e) => this.write('review', e.target.value)} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='grey' onClick={this.close}>
              <Icon name='remove' /> Cerrar
            </Button>
            <Mutation mutation={saveCoach}>
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
