import gql from 'graphql-tag'

export const savePlan = gql`
  mutation addPlans($data:PlansInput){
    addPlans(data:$data){
      id
    }
  }
`

export const modifyPlan = gql`
  mutation modifyPlans($data:PlansInput, $id:ID!){
    modifyPlans(data:$data, id:$id){
      id
    }
  }
`
