import { BarPropsExt } from '../types/extendedTypes'

const HIGHLIGH_COLOR = 'tomato'

export const changeDatumColor = (props: BarPropsExt): BarPropsExt | null =>
  props.style.fill === HIGHLIGH_COLOR
    ? null
    : modifyStyle(props)

const modifyStyle = (props: BarPropsExt): BarPropsExt => ({
  ...props,
  style: {
    fill: HIGHLIGH_COLOR
  }
})