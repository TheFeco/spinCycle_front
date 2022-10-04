import gql from 'graphql-tag'

export const allNotifications = gql`
  query allNotifications{
    allNotifications{
      id
      message
      users {
        id
      }
      title
      type
      created
    }
  }
`
