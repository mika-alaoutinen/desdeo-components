import { useState } from 'react'

import { coordinates } from '../data/testdata'
import { CoordinateChart, CoordinateSelectChart, ValueChart } from '../types/chartTypes'
import { Coordinate, Value } from '../types/dataTypes'

export const useOnClickHandler = (): ValueChart => {
  const [data, setData] = useState<Coordinate[]>(coordinates)

  const onClick = ({ id }: Value): void => {
    setData(editCoordinates(id, data))
  }

  return { data, onClick }
}

export const useCoordinateClickHandler = (): CoordinateChart => {
  const [data, setData] = useState<Coordinate[]>(coordinates)

  const onClick = ({ id }: Coordinate): void => {
    setData(editCoordinates(id, data))
  }

  return { data, onClick }
}

export const useOnSelectHandler = (): CoordinateSelectChart => {
  const [data, setData] = useState<Coordinate[]>(coordinates)

  const onSelect = (selected: Coordinate[]): void => {
    const selectedIDs = selected.map(datum => datum.id)
    const edited = data.map(datum => mapSelected(selectedIDs, datum))
    setData(edited)
  }

  const onSelectionCleared = (): void => {
    const unselected = data.map(datum => setSelected(datum, false))
    setData(unselected)
  }

  return { data, onSelect, onSelectionCleared }
}

// Utility functions
const editCoordinates = (clickedId: string, data: Coordinate[]): Coordinate[] =>
  data.map(coordinate => (coordinate.id === clickedId ? editSelected(coordinate) : coordinate))

const editSelected = (datum: Coordinate): Coordinate =>
  datum.isSelected === undefined ? setSelected(datum, true) : setSelected(datum, !datum.isSelected)

const mapSelected = (selectedIDs: string[], datum: Coordinate): Coordinate =>
  selectedIDs.includes(datum.id) ? setSelected(datum, true) : datum

const setSelected = (datum: Coordinate, isSelected: boolean): Coordinate => ({
  ...datum,
  isSelected,
})
