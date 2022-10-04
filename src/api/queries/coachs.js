import gql from 'graphql-tag'

export const allCoachs = gql`
  query allCoachs{
    allCoachs{
      id
      name
      gender
      review
      status
    }
  }
`
