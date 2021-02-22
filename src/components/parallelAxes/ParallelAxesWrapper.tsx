import React from 'react'

import { getAttributeNames, getMaxValues, normalizeData } from '../../data/attributeParser'
import { createAttributeSets } from '../../data/inputTransformations'
import { DataSet } from '../../types/dataTypes'
import { OnChangeHandler } from '../../types/eventHandlerTypes'
import ParallelAxes from './ParallelAxes'

export interface Props {
  data: DataSet[]
  onChange: OnChangeHandler
}

const ParallelAxesWrapper: React.FC<Props> = ({ data, onChange }) => {
  const datasets = createAttributeSets(data)
  const normalized = normalizeData(datasets)

  return (
    <ParallelAxes
      attributes={getAttributeNames(normalized)}
      data={normalized}
      maxTickValues={getMaxValues(datasets)}
      onChange={onChange}
    />
  )
}

export default ParallelAxesWrapper
