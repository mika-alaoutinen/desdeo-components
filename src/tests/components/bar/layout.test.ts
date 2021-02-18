import { Padding } from '../../../types/layoutTypes'

import { calculatePadding, swapOrientation } from '../../../components/bar/layout'

describe('Calculates padding based on chart orientation', () => {
  const horizontal: Padding = {
    top: 25,
    left: 75,
    right: 75,
    bottom: 25,
  }

  const vertical: Padding = {
    top: 25,
    left: 50,
    right: 50,
    bottom: 75,
  }

  it('horizontal orientation has 75 padding on both sides', () => {
    expect(calculatePadding('horizontal')).toEqual(horizontal)
  })

  it('vertical orientation has 75 padding bottom and 50 padding on both sides', () => {
    expect(calculatePadding('vertical')).toEqual(vertical)
  })
})

describe('Swaps the Orientation property around', () => {
  it('horizontal is switched to vertical', () => {
    expect(swapOrientation('horizontal')).toBe('vertical')
  })

  it('vertical is switched to horizontal', () => {
    expect(swapOrientation('vertical')).toBe('horizontal')
  })
})
