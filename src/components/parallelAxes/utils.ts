import { Attribute, ParallelAxesData } from '../../types/dataTypes'

// construct normalized datasets by dividing the value for each attribute by the maximum value
const normalizeData = (
  data: ParallelAxesData[], attributes: string[]
) => {
  const maximumValues = getMaximumValues(data, attributes)

  return data.map(datum => ({
    name: datum.name,
    data: attributes.map((attribute, i) => ({
      x: attribute,
      y: datum[attribute] / maximumValues[i]
    }))
  }))
}

// Find the maximum value for each axis. This will be used to normalize data and re-scale axis ticks
const getMaximumValues = (data: ParallelAxesData[]) => {
  return attributes.map(attribute => {
    return data.reduce((memo, datum) => {
      return datum[attribute] > memo
        ? datum[attribute]
        : memo
    }, -Infinity)
  })
}

export const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  for (const datum of data) {
    for (const attribute of datum.attributes) {
      console.log('attribute', attribute)
    }
  }

  return []
}

export const getAttributeKeys = (data: ParallelAxesData[]): string[] => {
  const attributes = data.map(datum => datum.attributes).flat()
  return getUniqueKeys(attributes)
}

const getUniqueKeys = (attributes: Attribute[]): string[] => {
  const keys = attributes.flatMap(keyToLowerCase)
  return [...new Set(keys)]
}

const keyToLowerCase = (attribute: Attribute): string[] =>
  Object
    .keys(attribute)
    .map(attribute => attribute.toLowerCase())