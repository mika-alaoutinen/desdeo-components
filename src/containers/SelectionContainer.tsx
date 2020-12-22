/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
// This error is a bug with Victory
import { VictorySelectionContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { selectionClearedHandler, selectionHandler } from '../events/onSelection'
import { SelectedData } from '../types/containerTypes'
import { SelectionContainerProps } from '../types/containerTypes'
import { EventCallback } from '../types/dataTypes'

interface Props {
  onSelect?: EventCallback
}

const SelectionContainer: React.FC<Props> = ({ onSelect, ...props }) => {

  const onSelection = (points: SelectedData) =>
    selectionHandler(points[0].data, onSelect)
  
  const onSelectionCleared = ({ selectedData }: SelectionContainerProps) =>
    selectionClearedHandler(selectedData[0].data)
  
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