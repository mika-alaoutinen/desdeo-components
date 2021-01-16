import { getMaxAttributes } from './dataParser'
import { Attribute, NormalizedData, ParallelAxesData, TextualData } from '../../types/dataTypes'

// Construct normalized datasets by dividing the value for each attribute by the maximum value.
export const normalizeData = (rawData: ParallelAxesData[]): NormalizedData[] => {
  const data = sanitizeData(rawData)
  const maxAttributes = getMaxAttributes(data)

  return data.map(datum => ({
    name: datum.name,
    data: normalizeAttributes(datum.attributes, maxAttributes)
  }))
}

// Utility functions
const normalizeAttributes = (
  attributes: Attribute[], maxAttributes: Attribute[]
): TextualData[] => {
  const maxValues = maxAttributes.map(attribute => attribute.value)

  return attributes.map((attribute, i) => ({
    x: attribute.name,
    y: attribute.value / maxValues[i]
  }))
}

const sanitizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(datum => ({
    ...datum,
    attributes: namesToLowerCase(datum.attributes)
  }))

const namesToLowerCase = (attributes: Attribute[]): Attribute[] =>
  attributes.map(attribute => ({
    ...attribute,
    name: attribute.name.toLowerCase()
  }))