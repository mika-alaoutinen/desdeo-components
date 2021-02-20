import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { renderComponent, renderVictoryContainer } from '../componentTests'
import { DataSet } from '../../../types/dataTypes'

import RadarChartWrapper from '../../../components/radar/RadarChartWrapper'

const dataset: DataSet[] = [
  {
    label: 'Label A',
    data: [{ id: 'a', isSelected: false, value: 1 }],
  },
  {
    label: 'Label B',
    data: [{ id: 'b', isSelected: false, value: 2 }],
  },
  {
    label: 'Label C',
    data: [{ id: 'c', isSelected: false, value: 3 }],
  },
]

const component = <RadarChartWrapper data={dataset} />

describe('BarChart is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Chart displays labels for data', () => {
  it('three labels are displayed', () => {
    render(component)
    const labels = ['Label A', 'Label B', 'Label C']
    labels.forEach(label => expect(screen.getByText(label)).toBeInTheDocument())
  })
})

describe('Chart has spoke lines that can be shown or hidden', () => {
  const spokeLineID = '[id*="spokeLine"]'

  it('chart displays spoke lines by default', () => {
    const { container } = render(component)
    expect(container.querySelectorAll(spokeLineID)).toHaveLength(3)
  })

  it('spoke lines can be hidden by passing a prop', () => {
    const component = <RadarChartWrapper data={dataset} showSpokeLines={false} />
    const { container } = render(component)
    expect(container.querySelectorAll(spokeLineID)).toHaveLength(0)
  })
})

describe('Areas are displayed correctly', () => {
  // Without custom styling, the default color of an area is rgb(244, 81, 30), or #F4511E.
  // Get all paths and find any that have a fill color of #F4511E. There should only be one.
  it('chart has one red area', () => {
    const { container } = render(component)
    const paths = Array.from(container.querySelectorAll('path'))
      .map(path => path.style.fill)
      .filter(fillColor => fillColor === '#F4511E')

    expect(paths).toHaveLength(1)
  })
})
