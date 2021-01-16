export interface Layout {
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

export const layout: Layout = {
  height: 500,
  width: 500,
  padding: {
    top: 100,
    left: 50,
    right: 50,
    bottom: 50
  }
}