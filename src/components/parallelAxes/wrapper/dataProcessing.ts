import { getMaxAttributes } from './dataParser'
import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

const normalizeData = (data: ParallelAxesData[]): ParallelAxesData[] =>
  data.map(({ label, attributes }) => ({
    label,
    attributes: normalizeAttributes(attributes, getMaxAttributes(data)),
  }))

// Utility functions
const normalizeAttributes = (attributes: Attribute[], maxAttributes: Attribute[]): Attribute[] => {
  const maxValues = maxAttributes.map(attribute => attribute.y)

  return attributes.map((attribute, i) => ({
    ...attribute,
    y: attribute.y / maxValues[i],
  }))
}

export { normalizeData }
