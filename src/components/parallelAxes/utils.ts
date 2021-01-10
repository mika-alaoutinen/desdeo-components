import { Attribute, ParallelAxesData } from '../../types/dataTypes'

// Helper functions
export const sanitizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(datum => ({
    ...datum,
    attributes: namesToLowerCase(datum.attributes)
  }))

// Find the maximum attribute values for each axis.
// The max values will be used to normalize data and re-scale axis ticks.
export const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

export const groupByName = (attributes: Attribute[]): Attribute[][] => {
  const groups = new Map<string, Attribute[]>(
    attributes.map(attribute => [ attribute.name, [] ])
  )

  attributes.forEach(attribute =>
    groups.get(attribute.name)?.push(attribute))

  return [...groups.values()]
}

export const findByMaxValue = (attributes: Attribute[]): Attribute => {
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

const namesToLowerCase = (attributes: Attribute[]): Attribute[] =>
attributes.map(attribute => ({
  ...attribute,
  name: attribute.name.toLowerCase()
}))