import React from 'react'

import ParallelAxes from '../component/ParallelAxes'
import { normalizeData } from './dataProcessing'
import { getAttributeNames, getMaxValues } from './dataParser'
import { createParallelAxesData } from '../../../data/transformations'
import { DataSet } from '../../../types/dataTypes'

export interface Props {
  data: DataSet
}

const ParallelAxesWrapper: React.FC<Props> = ({ data }) => {
  const datasets = createParallelAxesData(data)
  const normalized = normalizeData(datasets)

  return (
    <ParallelAxes
      attributes={getAttributeNames(normalized)}
      data={normalized}
      maxTickValues={getMaxValues(datasets)}
    />
  )
}

export default ParallelAxesWrapper