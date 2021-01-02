import { useState } from 'react'

import { testdata } from '../tests/testdata'
import { Datum } from '../types/dataTypes'
import { OnClickHandler, OnSelectHandler } from '../types/eventTypes'

// Utility functions
export const printData = (data: Datum[]): void => {
  const dataStrings = data.map(({ label, x, y, isSelected }) => {
    const labelStr = label ? label : 'unlabeled'
    const selectedStr = isSelected ? 'yes' : 'no'
    return `${labelStr} -> x: ${x} y: ${y} selected: ${selectedStr}`
  })

  console.log('selected data', dataStrings)
}

export const printDatum = ({ x, y, isSelected }: Datum): void => {
  console.log('x', x, 'y', y, 'isSelected', isSelected)
}

// Event handler for OnClick components
interface OnClickHandlerTest {
  data: Datum[],
  onClick: OnClickHandler
}

export const useOnClickReactHandler = (): OnClickHandlerTest => {
  const [ data, setData ] = useState(testdata)

  return {
    data,
    onClick: {
      type: 'USE_STATE',
      fn: setData
    }
  }
}

export const useOnClickReduxHandler = (): OnClickHandlerTest => ({
  data: testdata,
  onClick: {
    type: 'REDUX',
    fn: printDatum
  }
})

// Event handler for OnSelect components
interface OnSelectHandlerTest {
  data: Datum[],
  onSelect: OnSelectHandler
}

export const useOnSelectReactHandler = (): OnSelectHandlerTest => {
  const [ data, setData ] = useState(testdata)

  return {
    data,
    onSelect: {
      type: 'USE_STATE',
      fn: setData
    }
  }
}

export const useOnSelectReduxHandler = (): OnSelectHandlerTest => ({
  data: testdata,
  onSelect: {
    type: 'REDUX',
    fn: printData
  }
})