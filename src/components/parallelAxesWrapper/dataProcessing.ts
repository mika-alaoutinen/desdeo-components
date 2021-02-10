import { getMaxAttributes } from './dataParser'
import { Attribute, ParallelAxesData } from '../../types/dataTypes'

const normalizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(({ label, attributes }) => ({
    label,
    attributes: normalizeAttributes(attributes, getMaxAttributes(data))
  }))

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

  return attributes.map(({ x, y }, i) => ({
    x,
    y: y / maxValues[i]
  }))
}

const labelsToLowerCase = (attributes: Attribute[]): Attribute[] =>
  attributes.map(attribute => ({
    ...attribute,
    x: attribute.x.toLowerCase()
  }))

export { normalizeData, sanitizeData }