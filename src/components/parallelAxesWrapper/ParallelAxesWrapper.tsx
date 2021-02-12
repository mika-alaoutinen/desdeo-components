import React from 'react'

import ParallelAxes from '../parallelAxes/ParallelAxes'
import { normalizeData, sanitizeData } from './dataProcessing'
import { getAttributeNames, getMaxValues } from './dataParser'
import { createParallelAxesData } from '../../data/transformations'
import { DataSet } from '../../types/dataTypes'

interface Props {
  data: DataSet
}

const ParallelAxesWrapper: React.FC<Props> = ({ data }) => {
  const datasets = createParallelAxesData(data)
  const sanitized = sanitizeData(datasets)
  const cleanData = normalizeData(sanitized)

  return (
    <ParallelAxes
      attributes={getAttributeNames(cleanData)}
      data={cleanData}
      maxTickValues={getMaxValues(sanitized)}
    />
  )
}

export default ParallelAxesWrapper