import React from 'react'

import {
  renderComponent, renderDataLabels, renderFiveDatum, renderVictoryContainer
} from 'tests/components/componentTests'
import { coordinateData } from 'tests/testdata'

import ScatterSelection from 'components/scatter/ScatterSelection'

// Constants
const onSelecthandler = jest.fn()
const selectionClearedHandler = jest.fn()

const component =
  <ScatterSelection
    data={coordinateData}
    onSelect={onSelecthandler}
    onSelectionCleared={selectionClearedHandler}
  />

describe('ScatterSelect is rendered correctly', () => {
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