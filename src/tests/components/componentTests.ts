import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { OnClickHandler } from '../../types/chartTypes'

// A set of basic tests for all chart components. Used to reduce repeated test code.

const renderComponent = (component: React.ReactElement): void => {
  const chart = render(component)
  expect(chart).toBeTruthy()
}

const renderVictoryContainer = (component: React.ReactElement): void => {
  const { container } = render(component)
  const victoryContainers = container.getElementsByClassName('VictoryContainer')
  expect(victoryContainers).toHaveLength(1)
  expect(victoryContainers[0]).toBeTruthy()
}

const renderFiveDatum = (component: React.ReactElement): void => {
  const paths = getPaths(component)
  expect(paths).toHaveLength(5)
}

const dataShouldBeClickable = (
  component: React.ReactElement, handler: OnClickHandler
): void => {
  const paths = getPaths(component)
  fireEvent.click(paths[0])
  expect(handler).toHaveBeenCalled()
}

const shouldDisplayLabelOnMouseOver = (
  component: React.ReactElement, label: string
): void => {
  const paths = getPaths(component)
  fireEvent.mouseOver(paths[0])
  expect(screen.getByText(label)).toBeInTheDocument()
}

// The datum in a Victory chart are rendered as SVG path elements
const getPaths = (component: React.ReactElement): NodeListOf<SVGPathElement> => {
  const { container } = render(component)
  return container.querySelectorAll('path')
}

export {
  renderComponent, renderVictoryContainer, renderFiveDatum,
  dataShouldBeClickable, shouldDisplayLabelOnMouseOver, getPaths
}