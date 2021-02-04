import { createIntegerArray } from '../../utils/utilityFunctions'

describe('createIntegerArray creates an array of [1..n] numbers', () => {
  it('creates an array from 1 to max', () => {
    expect(createIntegerArray(5)).toEqual([1, 2, 3, 4, 5])
  })

  it('max = 1 returns [1]', () => {
    expect(createIntegerArray(1)).toEqual([1])
  })

  it('max = 0 returns an empty array', () => {
    expect(createIntegerArray(0)).toEqual([])
    expect(createIntegerArray(-1)).toEqual([])
  })

  it('max < 0 returns an empty array', () => {
    expect(createIntegerArray(-1)).toEqual([])
  })
})