import React from 'react'
// This error is a bug with Victory
import { VictorySelectionContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { selectionClearedHandler, onSelectionHandler } from '../events/onSelection'
import { SelectedData } from '../types/containerTypes'
import { Datum, ReduxAction, SetData } from '../types/dataTypes'

interface Props {
  data: Datum[],
  setData?: SetData,
  onSelect?: ReduxAction
}

const SelectionContainer: React.FC<Props> = ({ data, setData, onSelect, ...props }) => {

  const onSelection = (points: SelectedData): Datum[] =>
    onSelectionHandler(points[0].data, data, setData, onSelect)
  
  const selectionCleared = (): Datum[] =>
    selectionClearedHandler(data, setData, onSelect)
  
  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={onSelection}
      onSelectionCleared={selectionCleared}
    />
  
  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer