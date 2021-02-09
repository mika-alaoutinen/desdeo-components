import React from 'react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import { normalizeData, sanitizeData } from './dataProcessing'
import { getAttributeNames, getMaxAttributes } from './dataParser'
import { ParallelAxesData } from 'types/dataTypes'

interface Props {
  data: ParallelAxesData[]
}

/**
 * A wrapper for Parallel Axes component. Preprocesses the data given
 * and passes the cleaned up data to the actual visualization component.
 * @param data Parallel Axes data
 */
const ParallelAxesWrapper: React.FC<Props> = ({ data }) => {
  const sanitized = sanitizeData(data)
  const cleanData = normalizeData(sanitized)
  const attributes = getAttributeNames(cleanData)
  const maxValues = getMaxAttributes(sanitized).map(attribute => attribute.y)

  return (
    <ParallelAxes
      attributes={attributes}
      data={cleanData}
      maxTickValues={maxValues}
    />
  )
}

export default ParallelAxesWrapper