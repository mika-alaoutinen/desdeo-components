import React from 'react'
// This error is a bug with Victory
import { VictorySelectionContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { selectionClearedHandler, selectionHandler2 } from '../events/onSelection'
import { SelectedData } from '../types/containerTypes'
import { SelectionContainerProps } from '../types/containerTypes'
import { Datum, ReduxAction, SetData } from '../types/dataTypes'

interface Props {
  data: Datum[],
  setData?: SetData,
  onSelect?: ReduxAction,
  onUnselect?: ReduxAction
}

const SelectionContainer: React.FC<Props> = ({
  data, setData, onSelect, onUnselect, ...props
}) => {

  // const onSelection = (points: SelectedData): Datum[] => {
  //   console.log(data)
  //   return selectionHandler(points[0].data, onSelect)
  // }
  
  const onSelection = (points: SelectedData): Datum[] =>
    selectionHandler2(points[0].data, data, setData, onSelect)
  
  const onSelectionCleared = ({ selectedData }: SelectionContainerProps): Datum[] =>
    selectionClearedHandler(selectedData[0].data, onUnselect)
  
  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={onSelection}
      onSelectionCleared={onSelectionCleared}
    />
  
  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer