import React from 'react'

import BarChartWrapper from '../BarChartWrapper'
import StackedBarChart from './StackedBarChart'
import { BarChartWrapperProps } from '../../../types/chartTypes'

const StackedBarChartWrapper: React.FC<BarChartWrapperProps> = ({
  data, grouping, onClick, orientation
}) => (

  <BarChartWrapper
    Component={StackedBarChart}
    data={data}
    grouping={grouping}
    onClick={onClick}
    orientation={orientation}
  />
)

export default StackedBarChartWrapper