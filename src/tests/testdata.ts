import { Coordinate, DataSet } from '../types/dataTypes'

// Small datasets used in unit tests

export const coordinates: Coordinate[] = [
  { id: 'a', x: 10, y: 20, isSelected: true },
  { id: 'b', x: 20, y: 40, isSelected: false },
  { id: 'c', x: 30, y: 70, },
  { id: 'd', x: 40, y: 30, isSelected: true },
  { id: 'e', x: 50, y: 50, },
]

export const dataset: DataSet = [
  {
    label: 'Label A',
    data: [
      { id: 'a1', isSelected: false, value: 1 },
      { id: 'a2', isSelected: false, value: 2 },
      { id: 'a3', isSelected: false, value: 3 },
    ]
  },
  {
    label: 'Label B',
    data: [
      { id: 'b1', isSelected: false, value: 4 },
      { id: 'b2', isSelected: false, value: 5 },
      { id: 'b3', isSelected: false, value: 6 },
    ]
  },
]
