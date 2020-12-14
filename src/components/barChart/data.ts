import { Datum } from '../../types/dataTypes'

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

export const eventData: Datum[] = [
  { x: 1, y: 2, label: 'A' },
  { x: 2, y: 4, label: 'B' },
  { x: 3, y: 7, label: 'C' },
  { x: 4, y: 3, label: 'D' },
  { x: 5, y: 5, label: 'E' },
]