import { Datum, ReduxAction } from '../types/dataTypes'

export const selectionHandler = (data: Datum[], callback?: ReduxAction): Datum[] => {
  return editSelectionAndDoCallback(data, true, callback)
}

export const selectionClearedHandler = (unselected: Datum[], callback?: ReduxAction): Datum[] => {
  return editSelectionAndDoCallback(unselected, false, callback)
}

const editSelectionAndDoCallback = (
  data: Datum[],
  isSelected: boolean,
  callback?: ReduxAction
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