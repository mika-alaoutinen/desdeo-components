import { Datum, EventCallback } from '../types/dataTypes'

export const selectionHandler = (data: Datum[], callback?: EventCallback): Datum[] => {
  const editedData = data.map(datum => editSelected(datum, true))
  if (callback) {
    editedData.forEach(datum => callback(datum))
  }
  return editedData
}

export const selectionClearedHandler = (unselected: Datum[], callback?: EventCallback): Datum[] => {
  const editedData = unselected.map(datum => editSelected(datum, false))
  if (callback) {
    editedData.forEach(datum => callback(datum))
  }
  return editedData
}

const editSelected = (datum: Datum, isSelected: boolean): Datum => ({
  ...datum,
  isSelected
})