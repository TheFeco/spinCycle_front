import gql from 'graphql-tag'

export const allSchedules = gql`
  query allSchedules{
    allSchedules{
      id
      day
      order
      hour
      status
      ampm
    }
  }
`
