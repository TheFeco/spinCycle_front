import gql from 'graphql-tag'

export const addReservation = gql`
  mutation addReservation($data:ReservationsInput){
    addReservation(data:$data){
      id
    }
  }
`
