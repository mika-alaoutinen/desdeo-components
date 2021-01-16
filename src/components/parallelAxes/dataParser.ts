import { ParallelAxesData, Attribute } from '../../types/dataTypes'

// Find the maximum attribute values for each axis.
// The max values will be used to normalize data and re-scale axis ticks.
export const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

export const getAttributeNames = (data: ParallelAxesData[]): string[] => {
  const names = data
    .flatMap(datum => datum.attributes)
    .map(attribute => attribute.name)
    .map(name => name.toLowerCase())

  return [...new Set(names)]
}

export const getMaxAttributeValues = (data: ParallelAxesData[]): number[] =>
  getMaxAttributes(data).map(attribute => attribute.value)

// Utility functions
const groupByName = (attributes: Attribute[]): Attribute[][] => {
  const groups = new Map<string, Attribute[]>(
    attributes.map(attribute => [ attribute.name.toLowerCase(), [] ])
  )

  attributes.forEach(attribute =>
    groups.get(attribute.name)?.push(attribute))

  return [...groups.values()]
}

const findByMaxValue = (attributes: Attribute[]): Attribute => {
  const initial: Attribute = {
    name: '',
    value: -1
  }

  return attributes.reduce((currentMax, attribute) =>
    attribute.value > currentMax.value
      ? attribute
      : currentMax
    , initial
  )
}