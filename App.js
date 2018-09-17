import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './app/reducers'
import Routes from './config/routes'

const createStoreWithMW = applyMiddleware(thunk)(createStore)
const store = createStoreWithMW(reducers)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
