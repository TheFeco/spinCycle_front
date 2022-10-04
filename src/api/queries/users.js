import gql from 'graphql-tag'

export const allUsersCombo = gql`
  query allUsers{
    allUsers{
      key: id
      value: id
      text: name
    }
  }
`

export const login = gql`
  query getUser($credentials: CredentialsInput) {
    login(credentials: $credentials) {
      id
      name
      type
    }
  }
`

export const allUsers = gql`
  query allUsers {
    allUsers{
      id
      user
      name
      phone
      type
      status
    }
  }
`

export const infoUser = gql`
  query allReservationsByUser($userId:ID!){
    allReservationsByUser(userId:$userId) {
      id
      day
      canceledDate
      user {
        name
      }
      bike
      status
      created
      calendarId
    }
  }
`

export const allCalendarById = gql`
  query allCalendarById($calendarId:ID!){
    allCalendarById(calendarId:$calendarId) {
      id
      reservations {
			  id
        bike
        status
        user {
          id
        }
      }
    }
  }
`
