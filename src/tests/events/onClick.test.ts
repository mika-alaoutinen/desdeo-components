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

describe('Editing selected datum', () => {
  test('If isSelected is undefined, set it to true', () => {
    editSelected(undefined)
  })

  test('If isSelected is true, set it to false', () => {
    editSelected(true)
  })

  test('If isSelected is false, set it to true', () => {
    editSelected(false)
  })
})

describe('Updating data when useState function is given', () => {
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

const editSelected = (isSelected: boolean|undefined): void => {
  const data = createData(isSelected)
  const clicked = data[0]
  const afterClick = {
    ...clicked,
    isSelected: !isSelected
  }
  const handler = createHandler('REDUX')
  
  onClickHandler(clicked, data, handler)
  expect(handler.fn).toHaveBeenCalledWith(afterClick)
}

// Utility functions:
const createData = (isSelected: boolean|undefined): Datum[] => [{
  id: 'a', label: 'A', isSelected, x: 1, y: 1
}]

const createHandler = (type: 'REDUX'|'USE_STATE'|undefined): OnClickHandler => ({
  type,
  fn: jest.fn()
})