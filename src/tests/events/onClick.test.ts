import { onClickHandler } from '../../events/onClick'

import { testdata } from '../testdata'
import { OnClickHandler } from '../../types/eventTypes'

describe('Redux action event handler', () => {
  test('Handler should call Redux action that is given as parameter', () => {
    callHandlerOnce(createHandler('REDUX'))
  })
})

describe('React useState event handler', () => {
  test('Handler should call setData function that is given as parameter', () => {
    callHandlerOnce(createHandler('USE_STATE'))
  })
})

describe('Invalid event handler', () => {
  test('Handler should have no interactions if its type is invalid', () => {
    const clicked = testdata[0]
    const invalidHandler = createHandler(undefined)
    onClickHandler(clicked, testdata, invalidHandler)
    expect(invalidHandler.fn).not.toHaveBeenCalled()
  })
})

// Tester functions:
const callHandlerOnce = (handler: OnClickHandler): void => {
  const clicked = testdata[0]
  onClickHandler(clicked, testdata, handler)
  expect(handler.fn).toHaveBeenCalledTimes(1)
}

// Utility functions:
const createHandler = (type: 'REDUX'|'USE_STATE'|undefined): OnClickHandler => ({
  type,
  fn: jest.fn()
})