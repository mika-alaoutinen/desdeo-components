import { range } from '../../utils/utilFunctions'

describe('range creates an array of [1..n] numbers', () => {
  it('creates an array from 1 to max', () => {
    expect(range(5)).toEqual([1, 2, 3, 4, 5])
  })

  it('max = 1 returns [1]', () => {
    expect(range(1)).toEqual([1])
  })

  it('max = 0 returns an empty array', () => {
    expect(range(0)).toEqual([])
    expect(range(-1)).toEqual([])
  })

  it('max < 0 returns an empty array', () => {
    expect(range(-1)).toEqual([])
  })
})