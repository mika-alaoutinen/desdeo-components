import { normalizedData } from './normalizedDatasets'
import { parallelAxesData } from 'tests/testdata'
import { ParallelAxesData } from 'types/dataTypes'

import { normalizeData } from 'components/parallelAxes/dataTransformations'

describe('Data should be normalized', () => {
  it('normalizeData', () => {
    expect(normalizeData(parallelAxesData)).toEqual(normalizedData)
  })

  it('data is sanitized before it is normalized', () => {
    const unsanitized: ParallelAxesData[] = [{
      name: 'Adrien',
      attributes: [{ name: 'sTrENGth', value: 5 }]
    }]

    const sanitized = normalizeData(unsanitized)
    expect(sanitized[0].data[0].x).toEqual('strength')
  })
})