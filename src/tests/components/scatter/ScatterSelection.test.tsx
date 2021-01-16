import React from 'react'

import ScatterSelection from '../../../components/scatter/ScatterSelection'

import {
  renderComponent, renderDataLabels, renderFiveDatum, renderVictoryContainer
} from '../componentTests'
import { testdata } from '../../testdata'

// Constants
const onSelecthandler = jest.fn()
const selectionClearedHandler = jest.fn()

const component =
  <ScatterSelection
    data={testdata}
    onSelect={onSelecthandler}
    onSelectionCleared={selectionClearedHandler}
  />

describe('ScatterSelect is rendered correctly', () => {
  it('is truthy', () => {
    expect(ScatterSelection).toBeTruthy()
  })

  it('component is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has data labels A-E', () => {
    renderDataLabels(component)
  })

  it('has five path elements representing data points', () => {
    renderFiveDatum(component)
  })
})