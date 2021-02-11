import React, { useEffect, useState } from 'react'

import { createDataLabels } from '../../data/parser'
import { mapData } from '../../data/transformations'
import { BarChartProps, BarChartWrapperProps } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'

interface Props extends BarChartWrapperProps {
  Component: React.FC<BarChartProps>
}

const BarChartWrapper: React.FC<Props> = ({
  Component, data, grouping, onClick, orientation
}) => {

  const [ datasets, setDatasets ] = useState<CoordinateSet[]>([])
  const [ labels, setLabels ] = useState<string[]>([])

  useEffect(() => {
    setDatasets(mapData(data, grouping))
    setLabels(createDataLabels(data, grouping))
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