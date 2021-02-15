import React from 'react'

import ScatterChart from './ScatterChart'
import { createCoordinates } from '../../data/transformations'
import { OnClickHandler } from '../../types/chartTypes'
import { DataSetTuple } from '../../types/dataTypes'

export interface Props {
  data: DataSetTuple,
  onClick: OnClickHandler
}

const ScatterChartWrapper: React.FC<Props> = ({ data, onClick }) => (
  <ScatterChart
    data={createCoordinates(data)}
    onClick={onClick}
    xAxisLabel={data[0].label}
    yAxisLabel={data[1].label}
  />
)

export default ScatterChartWrapper