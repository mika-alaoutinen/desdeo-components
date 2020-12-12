import { EventTestData } from '../components/barChart/data'

export const defaultClickHandler = ({ x, y, label }: EventTestData): void => {
  console.log('x', x, 'y', y, 'label', label)
}

export const clickHandler = ({ x, y }: EventTestData): void => {
  console.log('x', x, 'y', y)
}