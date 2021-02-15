import {
  DataSet, CoordinateSet, ParallelAxesData, DataSetTuple, Coordinate
} from '../../types/dataTypes'

import {
  createAlternativeSets, createCriteriaSets, createCoordinates,
  createDataTableData, createParallelAxesData
} from '../../data/transformations'

const data: DataSet = [
  {
    label: 'WQ Fishery',
    data: [ 6.042483, 5.758127 ]
  },
  {
    label: 'WQ City',
    data: [ 3.17527, 3.410843 ]
  },
]

describe('createAlternativeSets produces datasets that are grouped by alternative solutions', () => {
  const expected: CoordinateSet[] = [
    {
      data: [
        { id: 'wq-fishery-1', x: 1, y: 6.042483 },
        { id: 'wq-fishery-2', x: 2, y: 5.758127 },
      ]
    },
    {
      data: [
        { id: 'wq-city-1', x: 1, y: 3.17527 },
        { id: 'wq-city-2', x: 2, y: 3.410843 },
      ]
    },
  ]

  it('transforms alternatives data as expected', () => {
    expect(createAlternativeSets(data)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createAlternativeSets([])).toEqual([])
  })
})

describe('createCriteriaSets produces datasets that are grouped by available criteria', () => {
  const expected: CoordinateSet[] = [
    {
      data: [
        { id: 'wq-fishery-1', x: 1, y: 6.042483 },
        { id: 'wq-city-1', x: 2, y: 3.17527 },
      ]
    },
    {
      data: [
        { id: 'wq-fishery-2', x: 1, y: 5.758127 },
        { id: 'wq-city-2', x: 2, y: 3.410843 },
      ]
    },
  ]

  it('transforms criteria data as expected', () => {
    expect(createCriteriaSets(data)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createCriteriaSets([])).toEqual([])
  })
})

describe('createCoordinates produces datasets for scatter charts', () => {
  const data: DataSetTuple = [
    {
      label: 'WQ Fishery',
      data: [ 6.042483, 5.758127 ]
    },
    {
      label: 'WQ City',
      data: [ 3.17527, 3.410843 ]
    },
  ]

  it('transforms dataset as expected', () => {
    const expected: Coordinate[] = [
      { id: 'wq-fishery-wq-city-1', x: 6.042483, y: 3.17527 },
      { id: 'wq-fishery-wq-city-2', x: 5.758127, y: 3.410843 }
    ]
    expect(createCoordinates(data)).toEqual(expected)
  })
})

describe('createParallelAxesData produces datasets for Parallel Axis component', () => {
  const expected: ParallelAxesData[] = [
    {
      label: 'Alternative 1',
      attributes: [
        { id: 'wq-fishery-1', x: 'wq fishery', y: 6.042483 },
        { id: 'wq-city-1', x: 'wq city', y: 3.17527 },
      ]
    },
    {
      label: 'Alternative 2',
      attributes: [
        { id: 'wq-fishery-2', x: 'wq fishery', y: 5.758127 },
        { id: 'wq-city-2', x: 'wq city', y: 3.410843 },
      ]
    },
  ]

  it('transforms parallel axes data as expected', () => {
    expect(createParallelAxesData(data)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createParallelAxesData([])).toEqual([])
  })
})

describe('createDataTableData transforms DataSet into a 2D array', () => {
  const expected = [
    [ 6.042483, 3.17527 ],
    [ 5.758127, 3.410843 ]
  ]

  it('transposes data', () => {
    expect(createDataTableData(data)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createDataTableData([])).toEqual([])
  })
})