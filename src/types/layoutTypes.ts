interface Layout {
  height: number
  width: number
  padding: Padding
}

interface Padding {
  top: number
  left: number
  right: number
  bottom: number
}

type Grouping = 'alternatives' | 'criteria'
type Orientation = 'horizontal' | 'vertical'

export type { Grouping, Layout, Orientation, Padding }
