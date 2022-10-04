import gql from 'graphql-tag'

export const saveUser = gql`
  mutation addUsers($data:UsersInput){
    addUsers(data:$data) {
      id
    }
  }
`

export const modifyUser = gql`
  mutation modifyUsers($data:UsersInput, $id:ID!){
    modifyUsers(data:$data, id:$id){
      id
    }
  }
`
