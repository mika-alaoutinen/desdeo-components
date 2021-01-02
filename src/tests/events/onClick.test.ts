import { onClickHandler } from '../../events/onClick'

import { testdata } from '../testdata'
import { OnClickHandler } from '../../types/eventTypes'
import { Datum } from '../../types/dataTypes'

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

describe('Editing selected datum with Redux action', () => {
  test('If isSelected is true, set it to false', () => {
    editSelectedWithRedux(0)
  })

  test('If isSelected is false, set it to true', () => {
    editSelectedWithRedux(1)
  })

  test('If isSelected is undefined, set it to true', () => {
    editSelectedWithRedux(2)
  })
})

describe('Editing selected datum with React useState function', () => {
  test('Edited datum should be in the data set', () => {
    const clicked = testdata[0]
    const afterClick = {
      ...clicked,
      isSelected: false
    }
    const updatedData: Datum[] = [
      afterClick,
      ...testdata.slice(1, testdata.length)
    ]
    const handler = createHandler('USE_STATE')

    onClickHandler(clicked, testdata, handler)
    expect(handler.fn).toHaveBeenCalledWith(updatedData)
  })
})

// Tester functions:
const callHandlerOnce = (handler: OnClickHandler): void => {
  const clicked = testdata[0]
  onClickHandler(clicked, testdata, handler)
  expect(handler.fn).toHaveBeenCalledTimes(1)
}

const editSelectedWithRedux = (testdataIndex: number): void => {
  const clicked = testdata[testdataIndex]
  const afterClick = {
    ...clicked,
    isSelected: !clicked.isSelected
  }
  const handler = createHandler('REDUX')
  onClickHandler(clicked, testdata, handler)
  expect(handler.fn).toHaveBeenCalledWith(afterClick)
}

// Utility functions:
const createHandler = (type: 'REDUX'|'USE_STATE'|undefined): OnClickHandler => ({
  type,
  fn: jest.fn()
})