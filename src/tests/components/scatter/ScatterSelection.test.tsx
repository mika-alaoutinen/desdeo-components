import React from 'react'

import {
  renderComponent, renderDataLabels, renderFiveCoordinate, renderVictoryContainer
} from '../componentTests'
import { coordinateData } from '../../testdata'

import ScatterSelection from '../../../components/scatter/ScatterSelection'

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
    renderFiveCoordinate(component)
  })
})