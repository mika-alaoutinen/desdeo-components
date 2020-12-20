import { Datum } from '../types/dataTypes'
import { BarPropsExt, DatumProps } from '../types/extendedTypes'

const HIGHLIGH_COLOR = 'tomato'

// This function is never used. I'll leave it here as an example for now.
export const changeDatumColor = (props: BarPropsExt): BarPropsExt | null =>
  props.style.fill === HIGHLIGH_COLOR
    ? null
    : modifyStyle(props)

export const updateSelected = (props: DatumProps): DatumProps => ({
  ...props,
  datum: setIsSelected(props.datum)
})

const modifyStyle = (props: BarPropsExt): BarPropsExt => ({
  ...props,
  style: {
    fill: HIGHLIGH_COLOR
  }
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