import React from 'react'
import { normalizeData } from '../../data/attributeParser'
import { createAttributeSets } from '../../data/inputTransformations'
import { findMaxValues } from '../../data/datasetParser'
import { DataSet } from '../../types/dataTypes'
import RadarChart from './RadarChart'

export interface Props {
  data: DataSet[]
  showSpokeLines?: boolean
}

const RadarChartWrapper: React.FC<Props> = ({ data, showSpokeLines = true }) => {
  const dataset = normalizeData(createAttributeSets(data))
  const maxValues = findMaxValues(data)

  return <RadarChart data={dataset} maxValues={maxValues} showSpokeLines={showSpokeLines} />
}

export default RadarChartWrapper
