import { createAxisLabels } from 'components/bar/rendering'
import { CoordinateSet } from 'types/dataTypes'

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
