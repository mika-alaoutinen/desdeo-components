import { normalizedData } from './normalizedDatasets'
import { Layout } from '../../../components/parallelAxes/layout'
import { Filter } from '../../../types/dataTypes'

import {
  addNewFilters, calculateAxisOffset, getActiveDatasets
} from '../../../components/parallelAxes/utils'

describe('addNewFilters creates filters for datasets', () => {
  const domain: [number, number] = [ 0, 1 ]
  const attributeName = 'strength'
  const expectedFilters: Filter[] = [{
    attribute: attributeName,
    range: domain
  }]

  it('if no filter exists with a given attribute, create a new filter', () => {
    expect(addNewFilters([], domain, attributeName)).toEqual(expectedFilters)
  })

  it('if a filter exists with given attribute, update the filters with new data', () => {
    const filters: Filter[] = [{
      attribute: attributeName,
      range: [ 0.5, 0.6 ]
    }]
    expect(addNewFilters(filters, domain, attributeName)).toEqual(expectedFilters)
  })
})

describe('calculateAxisOffset calculates offset based on given layout', () => {
  const attributesLength = 3

  it('uses default layout if no layout is given as parameter', () => {
    const expectedOffsets = [50, 250, 450]
    expectedOffsets.forEach((offset, i) =>
      expect(calculateAxisOffset(i, attributesLength)).toEqual(offset))
  })

  it('uses layout given as parameter', () => {
    const layout: Layout = {
      height: 100,
      width: 100,
      padding: {
        top: 100,
        left: 10,
        right: 10,
        bottom: 50
      }
    }
    const expectedOffsets = [10, 50, 90]
    expectedOffsets.forEach((offset, i) =>
      expect(calculateAxisOffset(i, attributesLength, layout)).toEqual(offset))
  })
})

describe('getActiveDatasets finds active datasets', () => {
  it('all datasets are active when filters are empty', () => {
    expect(getActiveDatasets(normalizedData, [])).toEqual([ 'Adrien', 'Brice', 'Casey' ])
  })

  it('filtered datasets are not active', () => {
    const filters: Filter[] = [{
      attribute: 'strength',
      range: [ 0, 0.01 ]
    }]
    expect(getActiveDatasets(normalizedData, filters)).toEqual([])
  })

  it('handles unknown filter type', () => {
    const filters: Filter[] = [{
      attribute: 'unknown',
      range: [ 0, 1 ]
    }]
    expect(getActiveDatasets(normalizedData, filters)).toEqual([])
  })
})