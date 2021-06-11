export const addLog = (message) => {
  return {
    type: 'ADD_LOG',
    payload: {
      status: 'log',
      message
    }
  }
}

export const setQuestion = (text, cb) => {
  return {
    type: 'SET_QUESTION',
    payload: {
      status: 'question',
      question: {
        cb,
        text
      }
    }
  }
}