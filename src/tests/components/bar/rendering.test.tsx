import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { dataShouldBeClickable, getPaths, shouldDisplayLabelOnMouseOver } from '../componentTests'
import { Coordinate, CoordinateSet } from '../../../types/dataTypes'

import {
  createCoordinateLabel,
  drawBar,
  drawDependentAxis,
  drawMainAxis,
} from '../../../components/bar/rendering'

const clickHandler = jest.fn()

describe('Creates label text for a coordinate', () => {
  const coordinate: Coordinate = {
    id: 'test-id',
    x: 1,
    y: 2,
  }

  it('label has ID and value', () => {
    expect(createCoordinateLabel(coordinate)).toBe('test-id:\n2')
  })
})

describe('Draws a dependent axis', () => {
  it('uses default tick format when tickFormatter is not given', () => {
    const Axis = drawDependentAxis()
    render(Axis)
    const ticks = [0, 0.2, 0.4, 0.6, 0.8, 1]
    ticks.forEach(tick => expect(screen.getByText(tick)).toBeInTheDocument())
  })

  it('accepts a tickFormatter function that adds custom tick values to axis', () => {
    const Axis = drawDependentAxis((x: number) => `x ${x}`)
    render(Axis)
    expect(screen.getAllByText(/x/)).toHaveLength(6)
  })
})

describe('Draws a main axis with labels', () => {
  it('axis displayes given labels', () => {
    const labels = ['A', 'B', 'C']
    const Axis = drawMainAxis(labels)
    render(Axis)
    labels.forEach(label => expect(screen.getByText(label)).toBeInTheDocument())
  })
})

describe('Draws a set of bars with labels', () => {
  const coordinateSet: CoordinateSet = {
    data: [
      { id: 'A', x: 1, y: 1 },
      { id: 'B', x: 2, y: 2 },
    ],
  }

  const data = coordinateSet.data
  const key = 1

  it('two bars are drawn', () => {
    const Bars = drawBar(data, clickHandler, key)
    const paths = getPaths(Bars)
    expect(paths).toHaveLength(2)
  })

  it('bar can be clicked', () => {
    const Bars = drawBar(data, clickHandler, key)
    dataShouldBeClickable(Bars, clickHandler)
  })

  it('bars display labels on mouse hover', () => {
    const Bars = drawBar(data, clickHandler, key)
    shouldDisplayLabelOnMouseOver(Bars, 'A:')
  })
})
