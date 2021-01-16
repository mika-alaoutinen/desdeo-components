import { useState } from 'react'

import { testdata } from '../tests/testdata'
import { Datum } from '../types/dataTypes'
import { OnClickChart, OnSelectChart } from '../types/chartTypes'

export const useOnClickHandler = (): OnClickChart => {
  const [ data, setData ] = useState(testdata)

  const onClick = (clicked: Datum): void => {
    const edited = data.map(datum => datum.id === clicked.id
      ? editSelected(datum)
      : datum
    )
    setData(edited)
  }

  return {
    data,
    onClick
  }
}

export const useOnSelectHandler = (): OnSelectChart => {
  const [ data, setData ] = useState(testdata)

  const onSelect = (selected: Datum[]): void => {
    const selectedIDs = selected.map(datum => datum.id)
    const edited = data.map(datum => mapSelected(selectedIDs, datum))
    setData(edited)
  }

  const onSelectionCleared = (): void => {
    const unselected = data.map(datum => setSelected(datum, false))
    setData(unselected)
  }

  return {
    data,
    onSelect,
    onSelectionCleared
  }
}

// Utility functions
const editSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? setSelected(datum, true)
    : setSelected(datum, !datum.isSelected)

const mapSelected = (selectedIDs: string[], datum: Datum): Datum =>
  selectedIDs.includes(datum.id)
    ? setSelected(datum, true)
    : datum

const setSelected = (datum: Datum, isSelected: boolean): Datum => ({
  ...datum,
  isSelected
})