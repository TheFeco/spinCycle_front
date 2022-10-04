export const changeActiveItem = (name) => {
  return {
    type: 'CHANGE_ACTIVE_ITEM',
    payload: name
  }
}

export const saveRol = (rol) => {
  return {
    type: 'SAVE_ROL',
    payload: rol
  }
}
