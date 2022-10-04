import gql from 'graphql-tag'

export const allPlans = gql`
  query allPlans{
    allPlans{
      id
      name
      price
      class
      expiration
      isUnlimited
      expiresOnFinalMonth
      expiresOnDate
      dateOfExpiration
      status
    }
  }
`

export const allUserAndPlans = gql`
  query allUsers{
    allUsers {
      id
      user
      name
    }
    allPlans {
      id
      name
      price
      class
      expiration
      isUnlimited
      expiresOnFinalMonth
      expiresOnDate
      dateOfExpiration
      status
    }
    allSchedulesBoughts {
      id
      date
      prince
      quantity
      availables
      user {
        id
        name
      }
      plan {
        id
        name
      }
      status
    }
  }
`

export const allBoughtsByUser = gql`
  query allSchedulesBoughtsByUser($userId: ID!) {
    allSchedulesBoughtsByUser(userId:$userId){
      id
      date
      prince
      quantity
      availables
      user {
        id
        name
      }
      plan {
        id
        name
      }
      status
    }
  }
`
