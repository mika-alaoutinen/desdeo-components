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
  const keys = getAttributeKeys(data)

  return keys.map(attribute => {
    return data.reduce((memo, datum) => {
      return datum[attribute] > memo
        ? datum[attribute]
        : memo
    }, -Infinity)
  })
}

export const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const keys = getAttributeKeys(data)
  const attributeMap = new Map<string, number>(keys.map(key => [key, -1]))

  for (const datum of data) {
    const attributes = datum.attributes.map(attribute => ({
      ...attribute,
      name: attribute.name.toLowerCase()
    }))

    for (const { name, value } of attributes) {
      const existingValue = attributeMap.get(name)
      if (existingValue && existingValue < value) {
        attributeMap.set(name, value)
      }
    }
  }

  const maxAttributes: Attribute[] = []
  for (const entry of attributeMap.entries()) {
    maxAttributes.push({ name: entry[0], value: entry[1] })
  }

  return maxAttributes
}

export const getAttributeKeys = (data: ParallelAxesData[]): string[] => {
  const attributes = data.map(datum => datum.attributes).flat()
  return getUniqueKeys(attributes)
}

const getUniqueKeys = (attributes: Attribute[]): string[] => {
  const keys = attributes.flatMap(attribute => attribute.name.toLowerCase())
  return [...new Set(keys)]
}