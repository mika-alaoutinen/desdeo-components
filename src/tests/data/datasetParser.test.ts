import { DataSet, MaxValue } from '../../types/dataTypes'
import { dataset } from '../testdata'

import { createDataLabels, findMaxValues } from '../../data/datasetParser'

describe('Should create labels from data that is grouped by alternatives', () => {
  it('alternatives grouping produces Alternative 1 and Alternative 2', () => {
    const labels = createDataLabels(dataset, 'alternatives')
    expect(labels).toEqual(['Alternative\n1', 'Alternative\n2', 'Alternative\n3'])
  })

  it('handles uneven datasets', () => {
    const unevenData: DataSet[] = [
      {
        label: 'A',
        data: [{ id: 'a1', isSelected: false, value: 6.042483 }],
      },
      {
        label: 'B',
        data: [
          { id: 'b1', isSelected: false, value: 3.17527 },
          { id: 'b2', isSelected: false, value: 3.410843 },
        ],
      },
    ]
    const labels = createDataLabels(unevenData, 'alternatives')
    expect(labels).toEqual(['Alternative\n1', 'Alternative\n2'])
  })

  it('handles an empty dataset', () => {
    expect(createDataLabels([], 'alternatives')).toEqual([])
  })
})

describe('Should create labels from data that is grouped by criteria', () => {
  it('criteria grouping finds all distinct labels from data set', () => {
    const labels = createDataLabels(dataset, 'criteria')
    expect(labels).toEqual(['Label\nA', 'Label\nB'])
  })

  it('handles an empty dataset', () => {
    expect(createDataLabels([], 'criteria')).toEqual([])
  })
})

describe('Should find and map max values from a DataSet', () => {
  it('findMaxValues creates a MaxValues array', () => {
    const expected: MaxValue[] = [
      { label: 'Label A', value: 3 },
      { label: 'Label B', value: 6 },
    ]
    expect(findMaxValues(dataset)).toEqual(expected)
  })
})
