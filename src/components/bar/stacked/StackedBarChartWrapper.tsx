import React from 'react'

import StackedBarChart from './StackedBarChart'
import { swapOrientation } from '../layout'
import { createDataLabels } from '../../../data/datasetParser'
import { createCoordinateSets } from '../../../data/inputTransformations'
import { BarChartWrapperProps } from '../../../types/chartTypes'

const StackedBarChartWrapper: React.FC<BarChartWrapperProps> = ({
  data,
  grouping,
  onClick,
  orientation,
}) => (
  <StackedBarChart
    data={createCoordinateSets(data, grouping)}
    labels={createDataLabels(data, grouping)}
    onClick={onClick}
    orientation={swapOrientation(orientation)}
  />
)

export default StackedBarChartWrapper
