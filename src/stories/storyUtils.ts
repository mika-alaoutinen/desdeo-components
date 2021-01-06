import { useState } from 'react'

import { testdata } from '../tests/testdata'
import { Datum } from '../types/dataTypes'
import { OnClickChart, OnSelectChart } from '../types/chartTypes'

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
export const useOnClickReactHandler = (): OnClickChart => {
  const [ data, setData ] = useState(testdata)

  const onClick = (clicked: Datum): void => {
    const edited = data.map(datum => datum.id === clicked.id
      ? editSelected(datum)
      : datum
    )
    setData(edited)
  }

  return { data, onClick }
}

// Event handler for OnSelect components
export const useOnSelectReactHandler = (): OnSelectChart => {
  const [ data, setData ] = useState(testdata)

  const onSelect = (selected: Datum[]): void => {
    const selectedIDs = selected.map(datum => datum.id)
    const edited = data.map(datum => mapSelected(selectedIDs, datum))
    setData(edited)
  }

  const onSelectionCleared = (): void => {
    const unselected = data.map(datum => ({
      ...datum,
      isSelected: false
    }))
    setData(unselected)
  }

  const mapSelected = (selectedIDs: string[], datum: Datum): Datum =>
    selectedIDs.includes(datum.id)
      ? {
        ...datum,
        isSelected: true
      }
      : datum

  return {
    data,
    onSelect,
    onSelectionCleared
  }
}

// Utility functions
const editSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? {
      ...datum,
      isSelected: true
    }
    : {
      ...datum,
      isSelected: !datum.isSelected
    }