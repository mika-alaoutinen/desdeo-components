import React, { useEffect, useState } from 'react'

import { BarChartProps, BarChartWrapperProps } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { createAlternativeSets } from '../../utils/dataTransformations'

interface Props extends BarChartWrapperProps {
  Component: React.FC<BarChartProps>
}

const BarChartWrapper: React.FC<Props> = ({
  Component, data, onClick, orientation
}) => {

  const [ datasets, setDatasets ] = useState<CoordinateSet[]>([])
  const [ labels, setLabels ] = useState<string[]>([])

  useEffect(() => {
    const sets = createAlternativeSets(data)
    setDatasets(sets)
    setLabels([]) // Get labels from DataSet
  }, [])

  return (
    <Component
      datasets={datasets}
      labels={labels}
      onClick={onClick}
      orientation={orientation}
    />
  )
}

export default BarChartWrapper