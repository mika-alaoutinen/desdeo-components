import { getMaxAttributes } from './dataParser'
import { Attribute, ParallelAxesData } from 'types/dataTypes'

const normalizeData = (data: ParallelAxesData[]): ParallelAxesData[] => {
  const maxAttributes = getMaxAttributes(data)

  return data.map(({ label, attributes }) => ({
    label,
    attributes: normalizeAttributes(attributes, maxAttributes)
  }))
}

const sanitizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(datum => ({
    ...datum,
    attributes: labelsToLowerCase(datum.attributes)
  }))

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

const labelsToLowerCase = (attributes: Attribute[]): Attribute[] =>
  attributes.map(attribute => ({
    ...attribute,
    x: attribute.x.toLowerCase()
  }))

export { normalizeData, sanitizeData }