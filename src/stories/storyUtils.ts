import { useState } from 'react'

import { coordinateData } from '../tests/testdata'
import { OnClickChart, OnSelectChart } from '../types/chartTypes'
import { Coordinate } from '../types/dataTypes'

export const useOnClickHandler = (): OnClickChart => {
  const [ data, setData ] = useState(coordinateData)

  const onClick = (clicked: Coordinate): void => {
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
  const [ data, setData ] = useState(coordinateData)

  const onSelect = (selected: Coordinate[]): void => {
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
const editSelected = (datum: Coordinate): Coordinate =>
  datum.isSelected === undefined
    ? setSelected(datum, true)
    : setSelected(datum, !datum.isSelected)

const mapSelected = (selectedIDs: string[], datum: Coordinate): Coordinate =>
  selectedIDs.includes(datum.id)
    ? setSelected(datum, true)
    : datum

const setSelected = (datum: Coordinate, isSelected: boolean): Coordinate => ({
  ...datum,
  isSelected
})