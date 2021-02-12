import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { OnClickHandler } from '../../types/chartTypes'

// A set of basic tests for all chart components. Used to reduce repeated test code.

export const renderComponent = (component: React.ReactElement): void => {
  const chart = render(component)
  expect(chart).toBeTruthy()
}

export const renderVictoryContainer = (component: React.ReactElement): void => {
  const { container } = render(component)
  const victoryContainers = container.getElementsByClassName('VictoryContainer')
  expect(victoryContainers).toHaveLength(1)
  expect(victoryContainers[0]).toBeTruthy()
}

export const renderDataLabels = (component: React.ReactElement): void => {
  render(component)
  const expectedLabels = [ 'A', 'B', 'C', 'D', 'E' ]
  expectedLabels.forEach(label =>
    expect(screen.getAllByText(label)).toHaveLength(1))
}

export const renderFiveDatum = (component: React.ReactElement): void => {
  const paths = getPaths(component)
  expect(paths).toHaveLength(5)
}

export const dataShouldBeClickable = (
  component: React.ReactElement, handler: OnClickHandler
): void => {
  const paths = getPaths(component)
  fireEvent.click(paths[0])
  expect(handler).toHaveBeenCalled()
}

export const shouldDisplayLabelOnMouseOver = (
  component: React.ReactElement, label: string
): void => {
  const paths = getPaths(component)
  fireEvent.mouseOver(paths[0])
  expect(screen.getByText(label)).toBeInTheDocument()
}

// The datum in a Victory chart are rendered as SVG path elements
export const getPaths = (component: React.ReactElement): NodeListOf<SVGPathElement> => {
  const { container } = render(component)
  return container.querySelectorAll('path')
}