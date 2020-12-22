import { Datum, EventCallback } from '../types/dataTypes'

export const selectionHandler = (data: Datum[], callback?: EventCallback): Datum[] => {
  return editSelectionAndDoCallback(data, true, callback)
}

export const selectionClearedHandler = (unselected: Datum[], callback?: EventCallback): Datum[] => {
  return editSelectionAndDoCallback(unselected, false, callback)
}

const editSelectionAndDoCallback = (
  data: Datum[],
  isSelected: boolean,
  callback?: EventCallback
): Datum[] => {
  const editedData = data.map(datum => editSelected(datum, isSelected))
  if (callback) {
    editedData.forEach(datum => callback(datum))
  }
  return editedData
}

const editSelected = (datum: Datum, isSelected: boolean): Datum => ({
  ...datum,
  isSelected
})