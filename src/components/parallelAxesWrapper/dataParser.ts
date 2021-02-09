import { Attribute, ParallelAxesData } from 'types/dataTypes'

const getAttributeNames = (data: ParallelAxesData[]): string[] => {
  const labels = data
    .flatMap(datum => datum.attributes)
    .map(attribute => attribute.x)
    .map(label => label.toLowerCase())

  return [...new Set(labels)]
}

const getMaxAttributeValues = (data: ParallelAxesData[]): number[] =>
  getMaxAttributes(data).map(attribute => attribute.y)

// Find the maximum attribute values for each axis.
// The max values will be used to normalize data and re-scale axis ticks.
const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

// Utility functions
const groupByName = (attributes: Attribute[]): Attribute[][] => {
  const groups = new Map<string, Attribute[]>(
    attributes.map(attribute => [ attribute.x.toLowerCase(), [] ])
  )

  attributes.forEach(attribute =>
    groups.get(attribute.x)?.push(attribute))

  return [...groups.values()]
}

const findByMaxValue = (attributes: Attribute[]): Attribute => {
  const initial: Attribute = {
    x: '',
    y: -1
  }

  return attributes.reduce((currentMax, attribute) =>
    attribute.y > currentMax.y
      ? attribute
      : currentMax
    , initial
  )
}

export { getAttributeNames, getMaxAttributes, getMaxAttributeValues }