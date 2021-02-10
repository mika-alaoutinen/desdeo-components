import { CoordinateSet } from '../../../types/dataTypes'

export const data: CoordinateSet[] = [
  {
    data: [
      { id: 'G', x: 1, y: 80, label: 'C', isSelected: true },
      { id: 'H', x: 2, y: 15, label: 'C', isSelected: true },
      { id: 'I', x: 3, y: 60, label: 'C', isSelected: true }
    ],
  },

  {
    data: [
      { id: 'd', x: 1, y: 10, label: 'B', isSelected: false },
      { id: 'e', x: 2, y: 15, label: 'B', isSelected: false },
      { id: 'f', x: 3, y: 60, label: 'B', isSelected: false }
    ],
  },

  {
    data: [
      { id: 'a', x: 1, y: 20, label: 'A', isSelected: true },
      { id: 'b', x: 2, y: 40, label: 'A', isSelected: false },
      { id: 'c', x: 3, y: 70, label: 'A' }
    ],
  }
]