import { Datum, EventCallback } from '../types/dataTypes'

export const selectionHandler = (data: Datum[], callback?: EventCallback): Datum[] => {
  const editedData = data.map(datum => editSelected(datum))
  if (callback) {
    editedData.forEach(datum => callback(datum))
  }
  return editedData
}

const editSelected = (datum: Datum): Datum => ({
  ...datum,
  isSelected: true
})

export const selectionClearedHandler = (unselected: Datum[]): void => {
  console.log('cleared props', unselected)
  // TODO: set isSelected to false for all data
}