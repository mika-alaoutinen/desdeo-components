import { Attribute, AttributeSet } from '../types/dataTypes'

const getAttributeNames = (data: AttributeSet[]): string[] => {
  const labels = data.flatMap(datum => datum.attributes).map(attribute => attribute.x)

  return [...new Set(labels)]
}

const getMaxAttributes = (data: AttributeSet[]): Attribute[] => {
  const attributes = data.flatMap(datum => datum.attributes)
  const grouped = groupByName(attributes)
  return grouped.map(findByMaxValue)
}

const getMaxValues = (data: AttributeSet[]): number[] =>
  getMaxAttributes(data).map(attribute => attribute.y)

const normalizeData = (data: AttributeSet[]): AttributeSet[] =>
  data.map(({ label, attributes }) => ({
    label,
    attributes: normalizeAttributes(attributes, getMaxAttributes(data)),
  }))

// Utility functions
const groupByName = (attributes: Attribute[]): Attribute[][] => {
  const groups = new Map<string, Attribute[]>(
    attributes.map(attribute => [attribute.x.toLowerCase(), []])
  )

  attributes.forEach(attribute => groups.get(attribute.x)?.push(attribute))

  return [...groups.values()]
}

const findByMaxValue = (attributes: Attribute[]): Attribute => {
  const initial: Attribute = {
    id: '',
    x: '',
    y: -0.00001,
  }

  return attributes.reduce((max, attribute) => (attribute.y > max.y ? attribute : max), initial)
}

const normalizeAttributes = (attributes: Attribute[], maxAttributes: Attribute[]): Attribute[] => {
  const maxValues = maxAttributes.map(attribute => attribute.y)

  return attributes.map((attribute, i) => ({
    ...attribute,
    y: attribute.y / maxValues[i],
  }))
}

export { getAttributeNames, getMaxAttributes, getMaxValues, normalizeData }
