import gql from 'graphql-tag'

export const saveCoach = gql`
  mutation addCoachs($data:CoachsInput){
    addCoachs(data:$data){
      id
    }
  }
`

export const modifyCoach = gql`
  mutation modifyCoachs($data:CoachsInput, $id:ID!){
    modifyCoachs(data:$data, id:$id){
      id
    }
  }
`
