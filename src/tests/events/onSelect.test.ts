import { onSelectHandler, selectionClearedHandler } from '../../events/onSelect'

import { testdata } from '../testdata'
import { OnSelectHandler } from '../../types/eventTypes'
import { Datum } from '../../types/dataTypes'

// OnSelectHandler
describe('onSelectHandler calls functions depending on given event handler type', () => {
  it('should call Redux action that is given as parameter', () => {
    callOnSelectHandlerOnce(createHandler('REDUX'))
  })

  it('should call React useState function that is given as parameter', () => {
    callOnSelectHandlerOnce(createHandler('USE_STATE'))
  })

  it('should have no interactions if its type is invalid', () => {
    const selected = testdata.slice(0, 2)
    const invalidHandler = createHandler(undefined)
    onSelectHandler(selected, testdata, invalidHandler)
    expect(invalidHandler.fn).not.toHaveBeenCalled()
  })
})

describe('Selecting data with Redux action sets isSelected property to true', () => {
  it('should have isSelected set to true', () => {
    const selected = testdata.slice(0, 2)
    const afterSelection = updateSelected(selected, true)
    const handler = createHandler('REDUX')
    onSelectHandler(selected, testdata, handler)
    expect(handler.fn).toHaveBeenCalledWith(afterSelection)
  })
})

describe('Selecting data with React useState function sets isSelected property to true', () => {
  it('should have isSelected set to true', () => {
    const selected = testdata.slice(0, 2)
    const afterSelection = updateSelected(selected, true)
    const updatedData: Datum[] = [
      ...afterSelection,
      ...testdata.slice(2, testdata.length)
    ]
    const handler = createHandler('USE_STATE')
    onSelectHandler(selected, testdata, handler)
    expect(handler.fn).toHaveBeenCalledWith(updatedData)
  })
})

// selectionClearedHandler
describe('selectionClearedHandler calls functions depending on given event handler type', () => {
  it('should call Redux action that is given as parameter', () => {
    callSelectionClearedHandlerOnce(createHandler('REDUX'))
  })
  
  it('should call React useState function that is given as parameter', () => {
    callSelectionClearedHandlerOnce(createHandler('USE_STATE'))
  })

  it('should have no interactions if its type is invalid', () => {
    const invalidHandler = createHandler(undefined)
    selectionClearedHandler(testdata, invalidHandler)
    expect(invalidHandler.fn).not.toHaveBeenCalled()
  })
})

describe('Unselect sets isSelected property to false for all data', () => {
  it('should have isSelected set to false', () => {
    callUnselectOnce(createHandler('REDUX'))
  })

  it('should have isSelected set to false', () => {
    callUnselectOnce(createHandler('USE_STATE'))
  })
})

// Tester functions:
const callOnSelectHandlerOnce = (handler: OnSelectHandler): void => {
  const selected = testdata.slice(0, 2)
  onSelectHandler(selected, testdata, handler)
  expect(handler.fn).toHaveBeenCalledTimes(1)
}

const callSelectionClearedHandlerOnce = (handler: OnSelectHandler): void => {
  selectionClearedHandler(testdata, handler)
  expect(handler.fn).toHaveBeenCalledTimes(1)
}

const callUnselectOnce = (handler: OnSelectHandler): void => {
  const afterUnselect = updateSelected(testdata, false)
  selectionClearedHandler(testdata, handler)
  expect(handler.fn).toHaveBeenCalledWith(afterUnselect)  
}

// Utilities
const createHandler = (type: 'REDUX'|'USE_STATE'|undefined): OnSelectHandler => ({
  type,
  fn: jest.fn()
})

const updateSelected = (data: Datum[], isSelected: boolean): Datum[] =>
  data.map(datum => ({
    ...datum,
    isSelected
  }))