import React from 'react'

import GroupedBarChart from './GroupedBarChart'
import { swapOrientation } from '../layout'
import { createDataLabels } from '../../../data/parser'
import { mapData } from '../../../data/transformations'
import { BarChartWrapperProps } from '../../../types/chartTypes'

const GroupedBarChartWrapper: React.FC<BarChartWrapperProps> = ({
  data, grouping, onClick, orientation
}) => (

  <GroupedBarChart
    datasets={mapData(data, grouping)}
    labels={createDataLabels(data, grouping)}
    onClick={onClick}
    orientation={swapOrientation(orientation)}
  />
)

export default GroupedBarChartWrapper