import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './constants'

const Auth = {
  setLogin: (userdata) => {
    const token = generateToken(userdata)
    localStorage.setItem('spincycle', token)
    return true
  },
  isLogged: async () => {
    const response = await verifyToken()
    return response
  },
  logout: () => {
    delete localStorage.spincycle;
  },
  getRol: async () => {
    const rol = await getRol()
    return rol
  },
  getUserId: async () => {
    const id = await getUserID()
    return id
  }
}

const generateToken = (userdata) => {
  localStorage.setItem('userId', userdata.login.id)
  
  const data = {
    id: userdata.login.id,
    name: userdata.login.name,
    type: userdata.login.type
  }

  return jwt.sign(data, JWT_SECRET);
}

const verifyToken = () => {
  const token = localStorage.spincycle;

  return jwt.verify(token, JWT_SECRET, (error, decode) => {
    if (error || typeof decode === 'undefined') {
      return false
    }
    else {
      return true
    }
  })
}

const getRol = () => {
  const token = localStorage.spincycle;

  return jwt.verify(token, JWT_SECRET, (error, decode) => {
    if (error || typeof decode === 'undefined') {
      return ''
    }
    else {
      return decode.type
    }
  })
}

const getUserID = (cb) => {
  const token = localStorage.spincycle;

  return jwt.verify(token, JWT_SECRET, (error, decode) => {
    if (error || typeof decode === 'undefined') {
      return ''
    }
    else {
      return decode.id
    }
  })
}

export default Auth;
