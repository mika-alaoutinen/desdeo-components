import { onClickHandler } from '../../events/onClick'

import { testdata } from '../testdata'
import { OnClickHandler } from '../../types/eventTypes'

describe('Calling event handlers that are given as parameter', () => {
  test('Handler should call Redux action that is given as parameter', () => {
    callHandlerOnce(createHandler('REDUX'))
  })

  test('Handler should call React useState function that is given as parameter', () => {
    callHandlerOnce(createHandler('USE_STATE'))
  })

  test('Handler should have no interactions if its type is invalid', () => {
    const clicked = testdata[0]
    const invalidHandler = createHandler(undefined)
    onClickHandler(clicked, testdata, invalidHandler)
    expect(invalidHandler.fn).not.toHaveBeenCalled()
  })
})

describe('Editing selected datum', () => {
  test('If isSelected is undefined, set it to true', () => {
    const clicked = testdata[1]
    const afterClick = {
      ...clicked,
      isSelected: true
    }
    const handler = createHandler('REDUX')
    onClickHandler(clicked, testdata, handler)
    expect(handler.fn).toHaveBeenCalledWith(afterClick)
  })
})

// describe('Updating data when useState function is given', () => {

// })

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

// export const data: Datum[] = [{ id: 'a', x: 1, y: 1, label: 'A' }]