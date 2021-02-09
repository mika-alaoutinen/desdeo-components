import { getMaxAttributes } from './dataParser'
import { Attribute, ParallelAxesData } from 'types/dataTypes'

// Construct normalized datasets by dividing the value for each attribute by the maximum value.
export const normalizeData = (rawData: ParallelAxesData[]): ParallelAxesData[] => {
  const data = sanitizeData(rawData)
  const maxAttributes = getMaxAttributes(data)

  return data.map(({ label, attributes }) => ({
    label,
    attributes: normalizeAttributes(attributes, maxAttributes)
  }))
}

// Utility functions
const normalizeAttributes = (
  attributes: Attribute[], maxAttributes: Attribute[]
): Attribute[] => {
  const maxValues = maxAttributes.map(attribute => attribute.y)

  return attributes.map((attribute, i) => ({
    x: attribute.x,
    y: attribute.y / maxValues[i]
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
    x: attribute.x.toLowerCase()
  }))