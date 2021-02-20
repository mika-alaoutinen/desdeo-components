import React from 'react'

import { createBarData } from '../../../data/inputTransformations'
import { DataSet } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'
import BarChart from './BarChart'

export interface Props {
  data: DataSet
  onClick: OnClickHandler
}

const BarChartWrapper: React.FC<Props> = ({ data, onClick }) => {
  const { data: barData, label } = createBarData(data)

  return <BarChart data={barData} onClick={onClick} xAxisLabel={label} />
}

export default BarChartWrapper
