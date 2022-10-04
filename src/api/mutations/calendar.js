import gql from 'graphql-tag'

export const createWeek = gql`
  mutation createWeek($data: [objectsOfDates]) {
    createWeek(data: $data)
  }
`

export const modifyCalendar = gql`
  mutation modifyCalendar($data:CalendarInput, $id:ID!){
    modifyCalendar(data:$data, id:$id){
      id
    }
  }
`

export const addReservation = gql`
  mutation addReservation($data:ReservationsInput, $calendarId:ID!){
    addReservation(data:$data, calendarId: $calendarId){
      id
    }
  }
`

export const modifyReservation = gql`
  mutation modifyReservation($data:ReservationsInput, $id:ID!, $calendarId:ID!, $reservationsList: [ReservationsInput]){
    modifyReservation(data:$data, id:$id, calendarId: $calendarId, reservationsList: $reservationsList){
      id
    }
  }
`
