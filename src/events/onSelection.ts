import { Datum, ReduxAction, SetData } from '../types/dataTypes'

// export const eventHandler = (
//   data: Datum[],
//   setData?: SetData,
//   reduxAction?: ReduxAction
// ): Datum[] => {
//   if (setData) {
//     return data
//   }

//   if (reduxAction) {
//     return data
//   }

//   return data
// }

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

  const editedIDs = edited.map(datum => datum.id)
  const dataWithoutEdited = data.filter(datum => !editedIDs.includes(datum.id))
  const newData = dataWithoutEdited.concat(edited)

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