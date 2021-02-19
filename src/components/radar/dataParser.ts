import { createParallelAxesData } from '../../data/inputTransformations'
import { DataSet, ParallelAxesData } from '../../types/dataTypes'
import { normalizeData } from '../parallelAxes/wrapper/dataProcessing'

export interface MaxValue {
  label: string
  value: number
}

export const findMaxValues = (dataset: DataSet): MaxValue[] =>
  dataset.map(({ data, label }) => {
    const maxValue = data
      .map(value => value.value)
      .reduce((max, current) => Math.max(max, current), 0)

    return { label, value: maxValue }
  })

export const processData = (dataset: DataSet): ParallelAxesData[] => {
  const datasets = createParallelAxesData(dataset)
  const normalized = normalizeData(datasets)
  return normalized
}
