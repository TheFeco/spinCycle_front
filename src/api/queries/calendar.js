import gql from 'graphql-tag'

export const findAllSchedulesByWeek = gql`
  query calendarByWeek($initialDate: Date, $finishDate: Date, $userId: ID!) {
    findAllSchedulesByWeek(initialDate: $initialDate, finishDate: $finishDate) {
      id
      isOpen
      dateOfCalendar
      schedule {
        id
        day
        order
        hour
        ampm
      }
      coach {
        id
        name
      }
      reservations {
        id
        day
        canceledDate
        user {
          id
          user
        }
        bike
        status
      }
      status
      created,
      subscriptions {
        id
      }
    },
    allCoachs{
      id
      name
    },
    allSchedulesBoughtsByUser(userId:$userId){
      id
      availables
      quantity
      plan {
        id
      }
    }
  }
`

export const allReservations = gql`
  query allReservations {
    allReservations {
      id
      isOpen
      dateOfCalendar
      coach {
        id
        name
      }
      schedule {
        day
        hour
        ampm
      }
      reservations {
        id
        day
        user {
          id
          user
          name
        }
    		bike
        status
      }
      subscriptions {
        id
      }
    },
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
