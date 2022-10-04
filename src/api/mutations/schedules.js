import gql from 'graphql-tag'

export const saveSchedule = gql`
  mutation addSchehs($data:SchedulesInput){
    addSchedules(data:$data){
      id
    }
  }
`

export const modifySchedule = gql`
  mutation modifySchedules($data:SchedulesInput, $id:ID!){
    modifySchedules(data:$data, id:$id){
      id
    }
  }
`
