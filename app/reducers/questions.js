import { SET_QUESTIONS, LOADING } from '../../config/constants'

export function setQuestions (state = [], action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    default:
      return state
  }
}
export function setLoader (state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.loading
    default:
      return state
  }
}
