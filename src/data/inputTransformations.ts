import { Attribute, AttributeSet, CoordinateSet, DataSet, Value } from '../types/dataTypes'
import { Grouping } from '../types/layoutTypes'
import { createAlternativeSets, createCriteriaSets, transpose } from './transformationUtils'

const createBarData = ({ data, label }: DataSet): CoordinateSet => {
  const coordinates = data.map((value, x) => {
    const { id, isSelected, value: y } = value
    return { id, isSelected, x: x + 1, y }
  })

  return {
    data: coordinates,
    label,
  }
}

const createCoordinateSets = (data: DataSet[], grouping: Grouping): CoordinateSet[] =>
  grouping === 'alternatives' ? createAlternativeSets(data) : createCriteriaSets(data)

const createDataTableData = (dataset: DataSet[]): Value[][] => {
  return !dataset.length ? [] : (transpose(dataset.map(column => column.data)) as Value[][])
}

const createAttributeSets = (dataset: DataSet[]): AttributeSet[] => {
  if (!dataset.length) {
    return []
  }

  return dataset[0].data.map((_, colIndex) => {
    const attributes: Attribute[] = dataset.map(({ data, label }) => ({
      id: data[colIndex].id,
      isSelected: data[colIndex].isSelected,
      x: label.toLowerCase(),
      y: data[colIndex].value,
    }))

    return {
      attributes,
      label: `Alternative ${colIndex + 1}`,
    }
  })
}

export { createAttributeSets, createBarData, createCoordinateSets, createDataTableData }
