import React from 'react'

import BarChartWrapper from '../BarChartWrapper'
import GroupedBarChart from './GroupedBarChart'
import { BarChartWrapperProps } from '../../../types/chartTypes'

const GroupedBarChartWrapper: React.FC<BarChartWrapperProps> = ({
  data, grouping, onClick, orientation
}) => (

  <BarChartWrapper
    Component={GroupedBarChart}
    data={data}
    grouping={grouping}
    onClick={onClick}
    orientation={orientation}
  />
)

export default GroupedBarChartWrapper