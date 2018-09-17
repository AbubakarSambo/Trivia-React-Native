import React from 'react'
import renderer from 'react-test-renderer'
import { Quiz } from '../app/routes/quiz'

it('renders Quiz page', () => {
  let questions = [
    {
      'category': 'Entertainment: Video Games',
      'type': 'boolean',
      'difficulty': 'hard',
      'question': 'Unturned originally started as a Roblox game.',
      'correct_answer': 'True',
      'incorrect_answers': [
        'False'
      ]
    },
    {
      'category': 'Science',
      'type': 'boolean',
      'difficulty': 'hard',
      'question': 'is pluto a planet',
      'correct_answer': 'False',
      'incorrect_answers': [
        'True'
      ]
    }
  ]
  const rendered = renderer.create(<Quiz questions={questions} />).toJSON()
  expect(rendered).toMatchSnapshot()
})
