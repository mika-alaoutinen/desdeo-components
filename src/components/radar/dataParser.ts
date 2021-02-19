import { DataSet } from '../../types/dataTypes'

export interface MaxValue {
  label: string
  value: number
}

export const findMaxValues = (dataset: DataSet): MaxValue[] =>
  dataset.map(({ data, label }) => {
    const value = data
      .map(value => value.value)
      .reduce((max, current) => (max < current ? max : current), 0)

    return { label, value }
  })
