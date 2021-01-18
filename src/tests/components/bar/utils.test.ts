// import { coordinateSets } from '../../testdata'
import { CoordinateSet } from '../../../types/dataTypes'

import {
  createAxisLabels, createIntegerArray
} from '../../../components/bar/utils'

describe('createAxisLabels maps labels from a CoordinateSet', () => {
  it('replaces spaces with line breaks', () => {
    const datasets: CoordinateSet[] = [
      { data: [], label: 'dataset' },
      { data: [], label: 'dataset with long label' },
    ]
    const expectedLabels = [ 'dataset', 'dataset\nwith\nlong\nlabel']
    expect(createAxisLabels(datasets)).toEqual(expectedLabels)
  })

  it('if no label is given, create a label with format Label 1, Label 2, etc.', () => {
    const datasets: CoordinateSet[] = [
      { data: [] },
      { data: [] },
      { data: [], label: 'dataset' },
    ]
    const expectedLabels = [ 'Label\n1', 'Label\n2', 'dataset' ]
    expect(createAxisLabels(datasets)).toEqual(expectedLabels)
  })
})

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