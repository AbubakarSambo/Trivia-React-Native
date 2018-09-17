import { combineReducers } from 'redux'
import { setQuestions, setLoader } from './questions'

const reducers = combineReducers({
  questions: setQuestions,
  loading: setLoader

})

export default reducers
