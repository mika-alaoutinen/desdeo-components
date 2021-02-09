import React from 'react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import {
  getAttributeNames, normalizeData, sanitizeData
} from 'components/parallelAxesWrapper/dataProcessing'
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
  const attributes = getAttributeNames(cleanData)

  return (
    <ParallelAxes
      attributes={attributes}
      data={cleanData}
    />
  )
}

export default ParallelAxesWrapper