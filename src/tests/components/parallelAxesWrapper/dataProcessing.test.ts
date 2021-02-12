import { normalizedData } from './normalizedDatasets'
import { parallelAxesData } from '../../testdata'

import { normalizeData } from '../../../components/parallelAxesWrapper/dataProcessing'

describe('Data is cleaned up by sanitizing inputs and normalizing values', () => {
  it('data should be normalized', () => {
    expect(normalizeData(parallelAxesData)).toEqual(normalizedData)
  })
})