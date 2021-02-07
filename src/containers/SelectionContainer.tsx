import React from 'react'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictoryChart } from 'victory'
import { VictorySelectionContainer } from 'victory-selection-container'

import { DOMAIN_PADDING, MATERIAL_THEME } from 'styles/victoryStyles'
import { OnSelectHandler, OnSelectionClearedHandler } from 'types/chartTypes'

interface Props {
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

const SelectionContainer: React.FC<Props> = ({ onSelect, onSelectionCleared, ...props }) => {

  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={points => onSelect(points[0].data)}
      onSelectionCleared={onSelectionCleared}
    />

  return (
    <VictoryChart
      { ...props }
      containerComponent={selectionContainer()}
      domainPadding={DOMAIN_PADDING}
      theme={MATERIAL_THEME}
    />
  )
}

export default SelectionContainer