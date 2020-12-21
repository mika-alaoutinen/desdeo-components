import { SelectionContainerProps } from '../types/containerTypes'
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

export const selectionClearedHandler = (props: SelectionContainerProps): void => {
  console.log('cleared props', props)
  // TODO: set isSelected to false for all data
}