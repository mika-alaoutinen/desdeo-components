import { CoordinateSet } from '../../../types/dataTypes'
import { createAxisLabels, getDatasetLength } from '../../../components/bar/utils'

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

describe('getDatasetLength calculates the length of a CoordinateSet array', () => {
  it('calculates the length of dataset', () => {
    const datasets: CoordinateSet[] = [
      { data: [] },
      { data: [] },
      { data: [] },
    ]
    expect(getDatasetLength(datasets)).toBe(3)
  })

  it('the length of an empty dataset is 0', () => {
    const datasets: CoordinateSet[] = []
    expect(getDatasetLength(datasets)).toBe(0)
  })
})