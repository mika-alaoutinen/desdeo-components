import React from 'react'

import ParallelAxes from './ParallelAxes'
import { normalizeData } from '../../data/attributeParser'
import { getAttributeNames, getMaxValues } from '../../data/attributeParser'
import { createAttributeSets } from '../../data/inputTransformations'
import { DataSet } from '../../types/dataTypes'

export interface Props {
  data: DataSet[]
}

const ParallelAxesWrapper: React.FC<Props> = ({ data }) => {
  const datasets = createAttributeSets(data)
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
