import React from 'react'
import mockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import Home from '../app/routes/home'
const store = mockStore([thunk])

it('renders home page', () => {
  const rendered = renderer.create(<Home store={store()} />).toJSON()
  expect(rendered).toMatchSnapshot()
})
