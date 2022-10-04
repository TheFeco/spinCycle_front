import gql from 'graphql-tag'

export const newNotification = gql`
subscription {
  newNotification {
     id
      message
      title
      type
      created
  }
}
`
