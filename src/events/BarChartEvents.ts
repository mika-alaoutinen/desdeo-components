import { BarPropsExt } from '../victoryTypes/extendedTypes'

const highlightColor = 'tomato'

export const changeDatumColor = (props: BarPropsExt): BarPropsExt | null =>
  props.style.fill === highlightColor
    ? null
    : { style: { fill: highlightColor } }