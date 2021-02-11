import { Coordinate, DataSet } from '../../types/dataTypes'

import {
  createCoordinateLabel, createDataLabels
} from '../../data/parser'

const data: DataSet = [
  { label: 'Label A', data: [ 1, 2 ] },
  { label: 'Label B', data: [ 3, 4 ] },
]

describe('Creates label text for a coordinate', () => {
  const coordinate: Coordinate = {
    id: 'test-id',
    x: 1,
    y: 2
  }

  it('label has ID and value', () => {
    expect(createCoordinateLabel(coordinate)).toBe('test-id:\n2')
  })
})

describe('Should create labels from data that is grouped by alternatives', () => {
  it('alternatives grouping produces Alternative 1 and Alternative 2', () => {
    const labels = createDataLabels(data, 'alternatives')
    expect(labels).toEqual([ 'Alternative\n1', 'Alternative\n2' ])
  })

  it('handles uneven datasets', () => {
    const unevenData: DataSet = [
      { label: 'A', data: [ 6.042483 ] },
      { label: 'B', data: [ 3.17527, 3.410843 ] },
      { label: 'C', data: [ 6.090291, 6.887735, 2.992514 ] },
    ]
    const labels = createDataLabels(unevenData, 'alternatives')
    expect(labels).toEqual([ 'Alternative\n1', 'Alternative\n2', 'Alternative\n3' ])
  })

  it('handles an empty dataset', () => {
    expect(createDataLabels([], 'alternatives')).toEqual([])
  })
})

describe('Should create labels from data that is grouped by criteria', () => {
  it('criteria grouping finds all distinct labels from data set', () => {
    const labels = createDataLabels(data, 'criteria')
    expect(labels).toEqual([ 'Label\nA', 'Label\nB' ])
  })

  it('handles an empty dataset', () => {
    expect(createDataLabels([], 'criteria')).toEqual([])
  })
})