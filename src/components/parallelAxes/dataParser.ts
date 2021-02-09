import { ParallelAxesData, Attribute } from 'types/dataTypes'

// Find the maximum attribute values for each axis.
// The max values will be used to normalize data and re-scale axis ticks.
const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

const getMaxAttributeValues = (data: ParallelAxesData[]): number[] =>
  getMaxAttributes(data).map(attribute => attribute.y)

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

export { getMaxAttributes, getMaxAttributeValues }