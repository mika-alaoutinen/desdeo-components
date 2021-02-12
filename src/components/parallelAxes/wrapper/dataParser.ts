import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

const getAttributeNames = (data: ParallelAxesData[]): string[] => {
  const labels = data
    .flatMap(datum => datum.attributes)
    .map(attribute => attribute.x)

  return [...new Set(labels)]
}

const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

const getMaxValues = (data: ParallelAxesData[]): number[] =>
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
    id: '',
    x: '',
    y: -0.00001
  }

  return attributes.reduce((currentMax, attribute) =>
    attribute.y > currentMax.y
      ? attribute
      : currentMax
    , initial
  )
}

export { getAttributeNames, getMaxAttributes, getMaxValues }