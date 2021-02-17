import { dataset } from '../testdata'
import { ParallelAxesData, Value } from '../../types/dataTypes'

import { createDataTableData, createParallelAxesData } from '../../data/inputTransformations'

describe('createParallelAxesData produces datasets for Parallel Axis component', () => {
  const expected: ParallelAxesData[] = [
    {
      label: 'Alternative 1',
      attributes: [
        { id: 'a1', x: 'label a', y: 1 },
        { id: 'b1', x: 'label b', y: 4 },
      ]
    },
    {
      label: 'Alternative 2',
      attributes: [
        { id: 'a2', x: 'label a', y: 2 },
        { id: 'b2', x: 'label b', y: 5 },
      ]
    },
    {
      label: 'Alternative 3',
      attributes: [
        { id: 'a3', x: 'label a', y: 3 },
        { id: 'b3', x: 'label b', y: 6 },
      ]
    },
  ]

  it('transforms parallel axes data as expected', () => {
    expect(createParallelAxesData(dataset)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createParallelAxesData([])).toEqual([])
  })
})

describe('createDataTableData transforms DataSet into a 2D array', () => {
  const expected: Value[][] = [
    [
      { id: 'a1', isSelected: false, value: 1 },
      { id: 'b1', isSelected: false, value: 4 },
    ],
    [
      { id: 'a2', isSelected: false, value: 2 },
      { id: 'b2', isSelected: false, value: 5 },
    ],
    [
      { id: 'a3', isSelected: false, value: 3 },
      { id: 'b3', isSelected: false, value: 6 },
    ],
  ]

  it('transposes data', () => {
    expect(createDataTableData(dataset)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createDataTableData([])).toEqual([])
  })
})