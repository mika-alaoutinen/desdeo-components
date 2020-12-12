import { BarProps } from 'victory'

import { EventTestData } from '../components/barChart/data'

export interface Mutation {
  target?: 'data' | 'labels' | 'parent',
  mutation: (props: BarProps) => void
}

export const defaultClickHandler = ({ x, y, label }: EventTestData): void => {
  console.log('x', x, 'y', y, 'label', label)
}