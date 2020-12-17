import { Datum } from './types/dataTypes'

export interface TestData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}

export const barData: TestData[] = [
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

export const data: Datum[] = [
  { x: 10, y: 20, label: 'A', isSelected: true },
  { x: 20, y: 40, label: 'B' },
  { x: 30, y: 70, label: 'C' },
  { x: 40, y: 30, label: 'D', isSelected: true },
  { x: 50, y: 50, label: 'E' },
]