import gql from 'graphql-tag'

export const saveBought = gql`
  mutation addSchedulesBoughts($data:SchedulesBoughtsInput) {
    addSchedulesBoughts(data:$data) {
      id
    }
  }
`
