import { Datum } from '../types/dataTypes'

export const printDatum = ({ x, y, isSelected }: Datum): void => {
  console.log('x', x, 'y', y, 'isSelected', isSelected)
}