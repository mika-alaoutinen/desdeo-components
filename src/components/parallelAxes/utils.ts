import { layout as defaultLayout } from './layout'
import { Filter, NormalizedData } from '../../types/dataTypes'
import { Layout } from '../../types/layoutTypes'

export const addNewFilters = (
  filters: Filter[], domain: [number, number], name: string
): Filter[] => {
  const extent = domain && Math.abs(domain[1] - domain[0])
  const minVal = 1 / Number.MAX_SAFE_INTEGER
  const maxDomainValue = 10

  // If there is no existing filter for an attribute, create one
  if (!filters.some(filter => filter.attribute === name)) {
    return filters.concat({
      attribute: name,
      range: extent <= minVal ? [minVal, maxDomainValue] : domain
    })
  }

  return filters.map(filter => filter.attribute === name
    ? {
      ...filter,
      range: extent <= minVal ? [minVal, maxDomainValue] : domain
    }
    : filter
  )
}

export const calculateAxisOffset = (
  index: number, attributesLength: number, layout?: Layout
): number => {
  const { width, padding } = layout ? layout : defaultLayout
  const step = (width - padding.left - padding.right) / (attributesLength - 1)
  return step * index + padding.left
}

export const getActiveDatasets = (datasets: NormalizedData[], filters: Filter[]): string[] =>
  datasets
    .map(dataset => isDatasetActive(dataset, filters) ? dataset.name : '')
    .filter(Boolean)

const isDatasetActive = (dataset: NormalizedData, filters: Filter[]): boolean =>
  filters.every(({ attribute, range }) => {
    const y = dataset.data.find(({ x }) => x === attribute)?.y
    return y ? isNumberInRange(y, range) : false
  })

const isNumberInRange = (n: number, range: [number, number]): boolean =>
  n > range[0] && n < range[1]