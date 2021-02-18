import { parallelAxesData } from '../../../data/testdata'
import { ParallelAxesData } from '../../../types/dataTypes'

import { normalizeData } from '../../../components/parallelAxes/wrapper/dataProcessing'

describe('Data is cleaned up by sanitizing inputs and normalizing values', () => {
  const normalizedData: ParallelAxesData[] = [
    {
      label: 'Alternative 1',
      attributes: [
        { id: 'wq-fishery-1', x: 'wq fishery', y: 0.9529405378550507 },
        { id: 'wq-city-1', x: 'wq city', y: 0.9309340828645587 },
        { id: 'roi-1', x: 'roi', y: 0.8842226072867204 },
        { id: 'city-tax-1', x: 'city tax', y: 0.27190940468961367 },
      ],
    },
    {
      label: 'Alternative 2',
      attributes: [
        { id: 'wq-fishery-2', x: 'wq fishery', y: 1 },
        { id: 'wq-city-2', x: 'wq city', y: 1 },
        { id: 'roi-2', x: 'roi', y: 1 },
        { id: 'city-tax-2', x: 'city tax', y: 1 },
      ],
    },
  ]

  it('data should be normalized', () => {
    expect(normalizeData(parallelAxesData)).toEqual(normalizedData)
  })
})
