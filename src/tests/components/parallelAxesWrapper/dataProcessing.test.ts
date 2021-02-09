import { normalizedData } from './normalizedDatasets'
import { parallelAxesData } from 'tests/testdata'
import { ParallelAxesData } from 'types/dataTypes'

import {
  normalizeData, sanitizeData
} from 'components/parallelAxesWrapper/dataProcessing'

describe('Data is cleaned up by sanitizing inputs and normalizing values', () => {
  it('data should be normalized', () => {
    expect(normalizeData(parallelAxesData)).toEqual(normalizedData)
  })

  it('data should be sanitized', () => {
    const unsanitized: ParallelAxesData[] = [{
      label: 'Adrien',
      attributes: [{ x: 'sTrENGth', y: 5 }]
    }]

    const sanitized = sanitizeData(unsanitized)
    expect(sanitized[0].attributes[0].x).toEqual('strength')
  })
})