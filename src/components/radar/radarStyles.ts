type Quarters = 1 | 0.75 | 0.5 | 0.25

interface PolarAxisStyle {
  axis: { stroke: 'none' }
  axisLabel?: { padding: number }
  grid: {
    stroke: 'grey' | 'black' | 'white'
    strokeWidth: Quarters
    opacity: Quarters
  }
}

const createPolarAxisStyle = (strokeWidth: Quarters = 1): PolarAxisStyle => ({
  axis: { stroke: 'none' },
  grid: { stroke: 'grey', strokeWidth: strokeWidth, opacity: 0.5 },
})

export const defaultPolarAxisStyle: PolarAxisStyle = {
  ...createPolarAxisStyle(0.25),
  axisLabel: { padding: 10 },
}

export const defaultSpokeStyle: PolarAxisStyle = createPolarAxisStyle()
