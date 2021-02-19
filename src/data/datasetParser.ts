import { DataSet, Grouping, MaxValue } from '../types/dataTypes'
import { range, replaceSpacesWithLineBreaks } from '../utils/utils'

export const createDataLabels = (data: DataSet[], grouping: Grouping): string[] =>
  grouping === 'alternatives' ? mapAlternativesLabels(data) : mapCriteriaNames(data)

export const findMaxValues = (dataset: DataSet[]): MaxValue[] =>
  dataset.map(({ data, label }) => {
    const maxValue = data
      .map(value => value.value)
      .reduce((max, current) => Math.max(max, current), 0)

    return { label, value: maxValue }
  })

const mapAlternativesLabels = (data: DataSet[]): string[] =>
  range(countAlternatives(data)).map(n => `Alternative\n${n}`)

const mapCriteriaNames = (data: DataSet[]): string[] =>
  data.map(coordinate => coordinate.label).map(replaceSpacesWithLineBreaks)

const countAlternatives = (data: DataSet[]): number => {
  return data
    .map(column => column.data.length)
    .reduce((max, current) => (current > max ? current : max), 0)
}
