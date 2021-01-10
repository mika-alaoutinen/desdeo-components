import { Attribute, ParallelAxesData } from '../../types/dataTypes'

interface NormalizedData {
  name: string,
  data: Data[]
}

interface Data {
  x: string,
  y: number
}

// construct normalized datasets by dividing the value for each attribute by the maximum value
export const normalizeData = (rawData: ParallelAxesData[]): NormalizedData[] => {
  const data = sanitizeData(rawData)
  const maxAttributes = getMaxAttributes(data)
  const maxValues = maxAttributes.map(attribute => attribute.value)

  return data.map(datum => {
    return {
      name: datum.name,
      data: datum.attributes.map((attribute, i) => ({
        x: attribute.name,
        y: attribute.value / maxValues[i]
      }))
    }
  })

  // return data.map(datum => ({
  //   name: datum.name,
  //   data: attributes.map((attribute, i) => ({
  //     x: attribute,
  //     y: datum[attribute] / maxValues[i]
  //   }))
  // }))
}

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