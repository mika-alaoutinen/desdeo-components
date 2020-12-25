import { Datum, ReduxAction, SetData } from '../types/dataTypes'

export const selectionHandler2 = (
  selected: Datum[],
  data: Datum[],
  setData?: SetData,
  reduxAction?: ReduxAction
): Datum[] => {
  
  const edited = editSelected(selected, true)
  if (reduxAction) {
    edited.forEach(datum => reduxAction(datum))
    return edited
  }

  const newData = updateData(edited, data)
  if (setData) {
    setData(newData)
    return newData
  }

  return newData
}

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
  const editedData = data.map(datum => ({
    ...datum,
    isSelected
  }))

  if (callback) {
    editedData.forEach(datum => callback(datum))
  }
  return editedData
}

const editSelected = (data: Datum[], isSelected: boolean): Datum[] =>
  data.map(datum => ({
    ...datum,
    isSelected
  }))

const updateData = (edited: Datum[], data: Datum[]): Datum[] => {
  const editedIDs = edited.map(datum => datum.id)
  return data
    .filter(datum => !editedIDs.includes(datum.id))
    .concat(edited)
}