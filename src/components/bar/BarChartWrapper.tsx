import React, { useEffect, useState } from 'react'

import { createLabels, mapData } from '../../data/parser'
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
    setLabels(createLabels(data, grouping))
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