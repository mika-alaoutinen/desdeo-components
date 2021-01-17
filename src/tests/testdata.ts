import {
  Coordinate, CoordinateSet, ParallelAxesData, StackedBarData
} from '../types/dataTypes'

// TODO: use coordinateSets in StackedBarChart
export const barData: StackedBarData[] = [
  {
    year: 2019,
    data: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ]
  },
  {
    year: 2020,
    data: [
      { quarter: 1, earnings: 12000 },
      { quarter: 2, earnings: 11500 },
      { quarter: 3, earnings: 12250 },
      { quarter: 4, earnings: 10000 },
    ]
  },
]

export const parallelAxesData: ParallelAxesData[] = [
  {
    name: 'Adrien',
    attributes: [
      { name: 'strength', value: 5 },
      { name: 'intelligence', value: 30 },
      { name: 'luck', value: 17 }
    ]
  },
  {
    name: 'Brice',
    attributes: [
      { name: 'strength', value: 10 },
      { name: 'intelligence', value: 25 },
      { name: 'luck', value: 8 }
    ]
  },
  {
    name: 'Casey',
    attributes: [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 20 },
      { name: 'luck', value: 15 }
    ]
  },
]

export const coordinateData: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

export const coordinateSets: CoordinateSet[] = [
  {
    data: [
      { id: 'G', x: 1, y: 80, label: 'C', isSelected: true },
      { id: 'H', x: 2, y: 15, label: 'C', isSelected: true },
      { id: 'I', x: 3, y: 60, label: 'C', isSelected: true }
    ],
    label: 'dataset 3'
  },

  {
    data: [
      { id: 'd', x: 1, y: 10, label: 'B', isSelected: false },
      { id: 'e', x: 2, y: 15, label: 'B', isSelected: false },
      { id: 'f', x: 3, y: 60, label: 'B', isSelected: false }
    ],
    label: 'dataset 2'
  },

  {
    data: [
      { id: 'a', x: 1, y: 20, label: 'A', isSelected: true },
      { id: 'b', x: 2, y: 40, label: 'A', isSelected: false },
      { id: 'c', x: 3, y: 70, label: 'A' }
    ],
    label: 'dataset 1'
  }
]