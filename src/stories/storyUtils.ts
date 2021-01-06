import { useState } from 'react'

import { testdata } from '../tests/testdata'
import { Datum } from '../types/dataTypes'
import { OnClickHandler, OnSelectHandler } from '../types/chartTypes'

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

  const onClick = (clicked: Datum): void => {
    const edited = data.map(datum => datum.id === clicked.id ? clicked : datum)
    setData(edited)
  }

  return { data, onClick }
}

export const useOnClickReduxHandler = (): OnClickHandlerTest => ({
  data: testdata,
  onClick: printDatum
})

// Event handler for OnSelect components
interface OnSelectHandlerTest {
  data: Datum[],
  onSelect: OnSelectHandler
}

export const useOnSelectReactHandler = (): OnSelectHandlerTest => {
  const [ data, setData ] = useState(testdata)

  const onSelect = (selected: Datum[]): void => {
    const selectedIDs = selected.map(datum => datum.id)
    const edited = data.map(datum => mapSelected(selectedIDs, datum))
    setData(edited)
  }

  const mapSelected = (selectedIDs: string[], datum: Datum): Datum =>
    selectedIDs.includes(datum.id)
      ? {
        ...datum,
        isSelected: true
      }
      : datum

  return { data, onSelect }
}

export const useOnSelectReduxHandler = (): OnSelectHandlerTest => ({
  data: testdata,
  onSelect: printData
})