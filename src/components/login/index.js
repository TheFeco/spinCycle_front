import React, { Component, Fragment } from 'react'
import { Input, Button, Form, Grid, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import { saveUser } from '../../api/mutations/users'
import { login } from '../../api/queries/users'
import Auth from '../../config/session'
import NotificationSystem from 'react-notification-system'
import moment from 'moment'

class Login extends Component {
  state = { user: '', password: '', name: '', email: '', phone: '', repeat: '', isLogin: false }

  componentDidMount() {
    const { history, location } = this.props

    if (location.pathname !== '/login' || location.pathname !== '/registro') {
      history.push('/login')
    }
  }

  write = (field, value) => {
    this.setState({ [field]: value });
  }

  resolveLogin = async (data) => {
    const { history } = this.props

    if (data.login.id) {
      await Auth.setLogin(data)
      window.location.href = '/panel'
    }
    else {
      this.resolveLoginError()
    }
  }

  resolveLoginError = () => {
    this.setState({ isLogin: false })
    this.refs.notificationSystem.addNotification({
      message: 'Credenciales incorrectas, vuelva a intentarlo.',
      level: 'warning'
    });
  }

  handleLogin = () => {
    const { user, password } = this.state

    if (user !== '' && password !== '') {
      this.setState({ isLogin: true })
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'Credenciales incorrectas, vuelva a intentarlo.',
        level: 'warning'
      });
    }
  }

  handleRegister = (saveUser) => {
    const { history } = this.props
    const { name, email, phone, password, repeat } = this.state

    if (password.length > 5) {
      if (password === repeat) {
        if (name !== '' && email !== '' && phone !== '') {
          saveUser({
            variables: {
              data: {
                name,
                phone,
                user: email.toLowerCase(),
                password,
                created: moment().format('YYYY-MM-DD')
              }
            }
          })
          .then(data => {
            if (data.data) {
              this.setState({
                user: '',
                password: '',
                name: '',
                email: '',
                phone: '',
                repeat: ''
              })

              history.push('/login')
            }
            else {
              this.refs.notificationSystem.addNotification({
                message: 'No se pudo crear el usuario, por favor verifique que la información sea correcta y vuelva a intentarlo',
                level: 'warning'
              });
            }
          })
        }
        else {
          this.refs.notificationSystem.addNotification({
            message: 'Por favor verifique que todos los campos esten llenos y vuelva a intentarlo',
            level: 'warning'
          });
        }
      }
      else {
        this.refs.notificationSystem.addNotification({
          message: 'La contraseña no coincide',
          level: 'warning'
        });
      }
    }
    else {
      this.refs.notificationSystem.addNotification({
        message: 'La contraseña debe de ser mayor de 6 dígitos',
        level: 'warning'
      });
    }
  }

  renderFormLogin = () => {
    return (
      <Form>
        <p className="login__info">Para continuar viendo su información es necesario iniciar sesión.</p>
        <Form.Field>
          <Input
            size="large"
            placeholder="Usuario"
            onChange={e => this.write("user", (e.target.value).toLowerCase())}
            key={1}
          />
        </Form.Field>
        <Form.Field>
          <Input
            size="large"
            type="password"
            placeholder="Contraseña"
            onChange={e =>
              this.write("password", e.target.value)
            }
            key={2}
          />
        </Form.Field>
        <Form.Field>
          <Button fluid color="orange" size="large" onClick={() => this.handleLogin()}>
            Iniciar sesión
          </Button>
        </Form.Field>
        <br />
        <div className="register__link"><Link to="/registro">Regristrate</Link></div>
      </Form>
    )
  }

  renderFormRegister = () => {
    return (
      <Form>
        <p className="login__info">Para poder accesar a reservar clases y ver su información es necesario registrarse. <br /><small>Si ya se ha registrado, el usuario no se registrará</small></p>
        <Form.Field>
          <Input
            size="large"
            placeholder="Nombre completo"
            onChange={e => this.write("name", e.target.value)}
            key={3}
          />
        </Form.Field>

        <Form.Field>
          <Input
            size="large"
            placeholder="Telefono"
            onChange={e => this.write("phone", e.target.value)}
            key={4}
          />
        </Form.Field>
        <Form.Field>
          <Input
            size="large"
            placeholder="Email (este será usado como tu usuario)"
            onChange={e => this.write("email", e.target.value)}
            key={5}
          />
        </Form.Field>
        <Form.Field>
          <Input
            size="large"
            type="password"
            placeholder="Contraseña"
            onChange={e =>
              this.write("password", e.target.value)
            }
            key={6}
          />
        </Form.Field>
        <Form.Field>
          <Input
            size="large"
            type="password"
            placeholder="Repetir contraseña"
            onChange={e =>
              this.write("repeat", e.target.value)
            }
            key={7}
          />
        </Form.Field>
        <Form.Field>
          <Mutation mutation={saveUser}>
            {saveUser =>
              <Button fluid color="orange" size="large" onClick={() => this.handleRegister(saveUser)}>
                Registrarse
              </Button>
            }
          </Mutation>

        </Form.Field>
        <br />
        <div className="register__link"><Link to="/login">Volver</Link></div>
      </Form>
    )
  }

  render() {
    const { location } = this.props
    const { user, password, isLogin } = this.state
    const renderView = location.pathname !== '/registro' ? this.renderFormLogin() : this.renderFormRegister()

    return (
      <Fragment>
        <Grid>
          <Grid.Row style={{paddingTop: 0}}>
            <Grid.Column mobile={16} computer={9}>
              <div className="ui two column centered grid full-screen">
                <div className="column" style={{ marginTop: 75 }}>
                  {renderView}
                  <br />

                </div>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={7} style={{backgroundColor: 'white'}}>
              <div className="login__side--right">
                <span />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {isLogin &&
          <Query query={login} variables={{ credentials: { user, password }}}>
            {({ loading, error, data }) => {
                if (loading) { return null }
                if (error) {
                  this.resolveLoginError()
                  return null
                }
                if (data) {
                  this.resolveLogin(data)
                  return null
                }
              }
            }
          </Query>
        }
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    );
  }
}

export default withRouter(Login);
