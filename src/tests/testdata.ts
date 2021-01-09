import { Datum, ParallelAxesData, StackedBarData } from '../types/dataTypes'

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
  { name: 'Adrien', strength: 5, intelligence: 30, speed: 500, luck: 3 },
  { name: 'Brice', strength: 1, intelligence: 13, speed: 550, luck: 2 },
  { name: 'Casey', strength: 4, intelligence: 15, speed: 80, luck: 1 },
  { name: 'Drew', strength: 3, intelligence: 25, speed: 600, luck: 5 },
  { name: 'Erin', strength: 9, intelligence: 50, speed: 350, luck: 4 },
  { name: 'Francis', strength: 2, intelligence: 40, speed: 200, luck: 2 }
]

export const testdata: Datum[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]