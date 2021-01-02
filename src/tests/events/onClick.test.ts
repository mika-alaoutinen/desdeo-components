import { onClickHandler } from '../../events/onClick'

import { testdata } from '../testdata'
import { OnClickHandler } from '../../types/eventTypes'
import { Datum } from '../../types/dataTypes'

describe('OnClickHandler calls functions depending on given event handler type', () => {
  it('should call Redux action that is given as parameter', () => {
    callHandlerOnce(createHandler('REDUX'))
  })

  it('should call React useState function that is given as parameter', () => {
    callHandlerOnce(createHandler('USE_STATE'))
  })

  it('should have no interactions if its type is invalid', () => {
    const clicked = testdata[0]
    const invalidHandler = createHandler(undefined)
    onClickHandler(clicked, testdata, invalidHandler)
    expect(invalidHandler.fn).not.toHaveBeenCalled()
  })
})

describe('Editing selected datum with Redux action alters its isSelected property', () => {
  it('should be false when it was true', () => {
    editSelectedWithRedux(0)
  })

  it('should be true when it was false', () => {
    editSelectedWithRedux(1)
  })

  it('should be true when it was undefined', () => {
    editSelectedWithRedux(2)
  })
})

describe('Editing selected datum with React useState function updates data array', () => {
  it('should be in the new data array', () => {
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