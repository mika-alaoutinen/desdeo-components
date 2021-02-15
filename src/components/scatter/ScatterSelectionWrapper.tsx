import React from 'react'

import ScatterSelection from './ScatterSelection'
import { OnSelectHandler, OnSelectionClearedHandler } from '../../types/chartTypes'
import { createCoordinates } from '../../data/transformations'
import { DataSetTuple } from '../../types/dataTypes'

export interface Props {
  data: DataSetTuple,
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

const ScatterSelectionWrapper: React.FC<Props> = ({
  data, onSelect, onSelectionCleared
}) => (

  <ScatterSelection
    data={createCoordinates(data)}
    onSelect={onSelect}
    onSelectionCleared={onSelectionCleared}
    xAxisLabel={data[0].label}
    yAxisLabel={data[1].label}
  />
)

export default ScatterSelectionWrapper