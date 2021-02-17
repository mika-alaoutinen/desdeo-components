import { useState } from 'react'

import { coordinates } from '../data/testdata'
import { ValueChart, CoordinateSelectChart } from '../types/chartTypes'
import { Coordinate, Value } from '../types/dataTypes'

export const useOnClickHandler = (): ValueChart => {
  const [ data, setData ] = useState(coordinates)

  const onClick = (clicked: Value): void => {
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

export const useOnSelectHandler = (): CoordinateSelectChart => {
  const [ data, setData ] = useState(coordinates)

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