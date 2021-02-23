import { AttributeSet, Coordinate, DataSet } from '../types/dataTypes'

// Small datasets used in unit tests

export const coordinates: Coordinate[] = [
  { id: 'a', x: 10, y: 20, isSelected: true },
  { id: 'b', x: 20, y: 40, isSelected: false },
  { id: 'c', x: 30, y: 70 },
  { id: 'd', x: 40, y: 30, isSelected: true },
  { id: 'e', x: 50, y: 50 },
]

export const dataset: DataSet[] = [
  {
    label: 'Label A',
    data: [
      { id: 'a1', isSelected: false, value: 1 },
      { id: 'a2', isSelected: false, value: 2 },
      { id: 'a3', isSelected: false, value: 3 },
    ],
  },
  {
    label: 'Label B',
    data: [
      { id: 'b1', isSelected: false, value: 4 },
      { id: 'b2', isSelected: false, value: 5 },
      { id: 'b3', isSelected: false, value: 6 },
    ],
  },
]

export const attributeSet: AttributeSet[] = [
  {
    label: 'Alternative 1',
    attributes: [
      { id: 'wq-fishery-1', x: 'wq fishery', y: 5.758127 },
      { id: 'wq-city-1', x: 'wq city', y: 3.17527 },
      { id: 'roi-1', x: 'roi', y: 6.090291 },
      { id: 'city-tax-1', x: 'city tax', y: 2.444406 },
    ],
  },
  {
    label: 'Alternative 2',
    attributes: [
      { id: 'wq-fishery-2', x: 'wq fishery', y: 6.042483 },
      { id: 'wq-city-2', x: 'wq city', y: 3.410843 },
      { id: 'roi-2', x: 'roi', y: 6.887735 },
      { id: 'city-tax-2', x: 'city tax', y: 8.989781 },
    ],
  },
]
