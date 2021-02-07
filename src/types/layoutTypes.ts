interface Layout {
  height: number,
  width: number,
  padding: Padding
}

interface Padding {
  top: number,
  left: number,
  right: number,
  bottom: number
}

type Orientation = 'horizontal' | 'vertical'

export type { Layout, Orientation, Padding }