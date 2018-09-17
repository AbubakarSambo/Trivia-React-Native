import axios from 'axios'

import { SET_QUESTIONS, LOADING } from '../../config/constants'

export function setQuestions (questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}
const setLoading = (loading) => {
  return {
    type: LOADING,
    loading
  }
}

export function getQuestions () {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      method: 'get',
      url: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    })
      .then((response) => {
        dispatch(setQuestions(response.data.results))
        dispatch(setLoading(false))
      }).catch((error) => {
        window.alert(error)
        dispatch(setLoading(false))
      })
  }
}
