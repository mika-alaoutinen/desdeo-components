import { Datum, ReduxAction, SetData } from '../types/dataTypes'

export const onSelectionHandler = (
  selected: Datum[],
  data: Datum[],
  setData?: SetData,
  reduxAction?: ReduxAction
): Datum[] => {
  
  if (reduxAction) {
    return reduxActionHandler(selected, reduxAction)
  }

  if (setData) {
    return setDataHandler(selected, data, setData)
  }

  return data
}

const reduxActionHandler = (selected: Datum[], action: ReduxAction): Datum[] => {
  const edited = editSelected(selected, true)
  action(edited)
  return edited
}

const setDataHandler = (selected: Datum[], data: Datum[], setData: SetData): Datum[] => {
  const edited = editSelected(selected, true)
  const newData = updateData(edited, data)
  setData(newData)
  return newData
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