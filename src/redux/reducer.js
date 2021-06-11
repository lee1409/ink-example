function reducer (state = {logs: []}, action) {
  switch (action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        logs: [
          ...state.logs,
          action.payload
        ]
      }
    default:
      return state
  }
}

export default reducer;