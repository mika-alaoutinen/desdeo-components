import React from 'react'

import BarChart from './BarChart'
import { createBarData } from '../../../data/transformations'
import { OnClickHandler } from '../../../types/chartTypes'
import { DataColumn } from '../../../types/dataTypes'

export interface Props {
  data: DataColumn,
  onClick: OnClickHandler
}

const BarChartWrapper: React.FC<Props> = ({ data, onClick }) => {
  const { data: barData, label } = createBarData(data)

  return (
    <BarChart
      data={barData}
      onClick={onClick}
      xAxisLabel={label}
    />
  )
}

export default BarChartWrapper