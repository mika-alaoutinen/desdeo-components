import React from 'react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import { normalizeData, sanitizeData } from './dataProcessing'
import { getAttributeNames, getMaxAttributeValues } from './dataParser'
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
  const cleanData = normalizeData(sanitizeData(data))

  return (
    <ParallelAxes
      attributes={getAttributeNames(cleanData)}
      data={cleanData}
      maxTickValues={getMaxAttributeValues(data)}
    />
  )
}

export default ParallelAxesWrapper