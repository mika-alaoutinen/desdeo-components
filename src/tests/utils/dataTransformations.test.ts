import { convertToCoordinates } from '../../utils/dataTransformations'

describe('convertToCoordinates transforms data into form that charts can understand', () => {
  it('placeholder', () => {
    convertToCoordinates([])
    expect(1).toBeTruthy()
  })
})