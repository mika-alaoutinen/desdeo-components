import { fireEvent, render } from '@testing-library/react'

// Helper functions for testing tables

const clickingOnCellCallsClickHandler = (
  component: React.ReactElement,
  onClick: jest.Mock
): void => {
  const container = renderTableComponent(component)
  const row = container.querySelector('td')
  if (row) {
    fireEvent.click(row)
  }
  expect(onClick).toHaveBeenCalled()
}

const colorShouldChangeOnMouseHover = (component: React.ReactElement): void => {
  const container = renderTableComponent(component)
  const row = container.querySelector('tr')
  if (row) {
    fireEvent.mouseEnter(row)
    expect(row).toHaveStyle({ background: 'whitesmoke' })
    fireEvent.mouseLeave(row)
    expect(row).toHaveStyle({ background: 'white' })
  }
}

const defaultColorShouldBeWhite = (component: React.ReactElement): void => {
  const container = renderTableComponent(component)
  const row = container.querySelector('tr')
  expect(row).toHaveStyle({ background: 'white' })
}

const renderTableComponent = (component: React.ReactElement): Element => {
  const tbody = document.createElement('tbody')
  const { container } = render(component, {
    container: document.body.appendChild(tbody),
  })
  return container
}

export {
  clickingOnCellCallsClickHandler,
  colorShouldChangeOnMouseHover,
  defaultColorShouldBeWhite,
  renderTableComponent,
}
