import React, { useEffect, useState } from 'react'

import { CoordinateSet, DataSet } from '../../types/dataTypes'
import { BarChartProps, OnClickHandler } from '../../types/chartTypes'
import { createAlternativeSets } from '../../utils/dataTransformations'
import { Orientation } from '../../types/layoutTypes'

type Grouping = 'alternatives' | 'criteria'

interface Props {
  BarChartComponent: React.FC<BarChartProps>,
  data: DataSet,
  grouping: Grouping,
  onClick: OnClickHandler,
  orientation: Orientation
}

const BarChartWrapper: React.FC<Props> = ({
  BarChartComponent, data, onClick, orientation
}) => {
  const [ datasets, setDatasets ] = useState<CoordinateSet[]>([])
  const [ labels, setLabels ] = useState<string[]>([])

  useEffect(() => {
    const sets = createAlternativeSets(data)
    setDatasets(sets)
    setLabels([]) // Get labels from DataSet
  }, [])

  return (
    <BarChartComponent
      datasets={datasets}
      labels={labels}
      onClick={onClick}
      orientation={orientation}
    />
  )
}

export default BarChartWrapper