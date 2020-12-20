import { Datum } from '../types/dataTypes'
import { DatumProps } from '../types/extendedTypes'

export const updateSelected = (props: DatumProps): DatumProps => ({
  ...props,
  datum: setIsSelected(props.datum)
})

const setIsSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? {
      ...datum,
      isSelected: true
    }
    : {
      ...datum,
      isSelected: !datum.isSelected
    }