import gql from 'graphql-tag'

export const addNotification = gql`
  mutation addNotification($data:NotificationsInput){
    addNotification(data:$data){
      id
    }
  }
`
