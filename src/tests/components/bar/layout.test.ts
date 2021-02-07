import { calculatePadding } from 'components/bar/layout'
import { Padding } from 'types/layoutTypes'

describe('Calculates padding based on chart orientation', () => {
  const horizontal: Padding = {
    top: 25,
    left: 75,
    right: 25,
    bottom: 25
  }

  const vertical: Padding = {
    top: 25,
    left: 25,
    right: 25,
    bottom: 75
  }

  it('horizontal orientation has 75 padding left', () => {
    expect(calculatePadding('horizontal')).toEqual(horizontal)
  })

  it('vertical orientation has 75 padding bottom', () => {
    expect(calculatePadding('vertical')).toEqual(vertical)
  })

  it('returns horizontal padding by default if orientation is not given', () => {
    expect(calculatePadding(undefined)).toEqual(horizontal)
  })
})