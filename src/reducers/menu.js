export default (state = {
  active: 'home',
}, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ITEM':
      return {
        ...state,
        active: action.payload
      }
    case 'SAVE_ROL':
      return {
        ...state,
        rol: action.payload
      }
    default:
      return state
  }
}
