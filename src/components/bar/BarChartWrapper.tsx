import React from 'react'

import { createDataLabels } from '../../data/parser'
import { mapData } from '../../data/transformations'
import { BarChartProps, BarChartWrapperProps } from '../../types/chartTypes'

interface Props extends BarChartWrapperProps {
  Component: React.FC<BarChartProps>
}

const BarChartWrapper: React.FC<Props> = ({
  Component, data, grouping, onClick, orientation
}) => {

  const datasets = mapData(data, grouping)
  const labels = createDataLabels(data, grouping)

  return (
    <Component
      datasets={datasets}
      labels={labels}
      onClick={onClick}
      orientation={orientation}
    />
  )
}

export default BarChartWrapper