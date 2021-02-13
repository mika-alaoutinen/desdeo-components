import React from 'react'

import { swapOrientation } from './layout'
import { createDataLabels } from '../../data/parser'
import { mapData } from '../../data/transformations'
import { BarChartProps, BarChartWrapperProps } from '../../types/chartTypes'

interface Props extends BarChartWrapperProps {
  Component: React.FC<BarChartProps>
}

const BarChartWrapper: React.FC<Props> = ({
  Component, data, grouping, onClick, orientation
}) => (

  <Component
    datasets={mapData(data, grouping)}
    labels={createDataLabels(data, grouping)}
    onClick={onClick}
    orientation={swapOrientation(orientation)}
  />
)

export default BarChartWrapper