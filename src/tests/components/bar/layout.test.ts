import { calculatePadding } from '../../../components/bar/layout'
import { Padding } from '../../../types/layoutTypes'

describe('Calculates padding based on chart orientation', () => {
  const horizontal: Padding = {
    top: 25,
    left: 75,
    right: 75,
    bottom: 25
  }

  const vertical: Padding = {
    top: 25,
    left: 50,
    right: 50,
    bottom: 75
  }

  it('horizontal orientation has 75 padding on both sides', () => {
    expect(calculatePadding('horizontal')).toEqual(horizontal)
  })

  it('vertical orientation has 75 padding bottom and 50 padding on both sides', () => {
    expect(calculatePadding('vertical')).toEqual(vertical)
  })
})