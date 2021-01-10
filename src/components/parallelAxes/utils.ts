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

export const getMaxAttributes1 = (data: ParallelAxesData[]): Attribute[] => {
  const sanitizedData = sanitizeData(data)

  const initialMaxAttribute: Attribute = {
    name: '',
    value: -1
  }

  const grouped = sanitizedData
    .flatMap(datum => datum.attributes)
    .reduce((r, a) => {
      console.log('r', r)
      console.log('a', a)

      r[a.name] = [...r[a.name] || [], a]
      return r
    }, initialMaxAttribute)

  // data
  //   .flatMap(datum => datum.attributes)
  //   .reduce((currentMax, attribute) => attribute.value > currentMax.value
  //     ? attribute
  //     : currentMax,
  //     initialMaxAttribute
  //   )
}

export const getMaxAttributes = (data: ParallelAxesData[]): Attribute[] => {
  const sanitized = sanitizeData(data)
  const keys = getAttributeKeys(sanitized)
  const attributeMap = new Map<string, Attribute>(keys.map(key => [key, { name: key, value: -1 }]))

  for (const datum of sanitized) {
    for (const attribute of datum.attributes) {
      const existingAttribute = attributeMap.get(attribute.name)
      if (existingAttribute && existingAttribute.value < attribute.value) {
        attributeMap.set(attribute.name, attribute)
      }
    }
  }

  return [...attributeMap.values()]
}

// Helper functions
export const sanitizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(datum => ({
      ...datum,
      attributes: attributeNamesToLowerCase(datum.attributes)
  }))

const attributeNamesToLowerCase = (attributes: Attribute[]): Attribute[] =>
  attributes.map(attribute => ({
    ...attribute,
    name: attribute.name.toLowerCase()
  }))

export const getAttributeKeys = (data: ParallelAxesData[]): string[] => {
  const attributes = data.map(datum => datum.attributes).flat()
  return getUniqueKeys(attributes)
}

const getUniqueKeys = (attributes: Attribute[]): string[] => {
  const keys = attributes.flatMap(attribute => attribute.name.toLowerCase())
  return [...new Set(keys)]
}