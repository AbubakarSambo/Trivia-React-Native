
import React from 'react'
import renderer from 'react-test-renderer'
import { ResultRow } from '../app/components/resultrow'

it('renders correct row on results page', () => {
  let item = {
    correct_answer: true,
    selectedAnswer: true,
    question: 'is russell westbrook the sickest player ever?'
  }
  const rendered = renderer.create(<ResultRow item={item} />).toJSON()
  expect(rendered).toMatchSnapshot()
})
