import React from 'react'

import ScatterChart from './ScatterChart'
import { createCoordinates } from '../../data/transformations'
import { OnClickHandler } from '../../types/chartTypes'
import { DataSetTuple } from '../../types/dataTypes'

export interface Props {
  data: DataSetTuple,
  onClick: OnClickHandler,
  xAxisLabel?: string,
  yAxisLabel?: string
}

const ScatterChartWrapper: React.FC<Props> = ({
  data, onClick, xAxisLabel, yAxisLabel
}) => (

  <ScatterChart
    data={createCoordinates(data)}
    onClick={onClick}
    xAxisLabel={xAxisLabel}
    yAxisLabel={yAxisLabel}
  />
)

export default ScatterChartWrapper