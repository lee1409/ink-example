function reducer(state = { logs: [], question: {}, status: "log" }, action) {
  switch (action.type) {
    case "ADD_LOG":
      return {
        ...state,
        status: action.payload.status,
        logs: [...state.logs, action.payload.message],
      };
    case "SET_QUESTION":
      return {
        ...state,
        status: action.payload.status,
        question: action.payload.question,
      };
    default:
      return state;
  }
}

export default reducer;
