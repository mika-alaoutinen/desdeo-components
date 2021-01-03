import { render } from '@testing-library/react'

import { OnClickHandler, OnSelectHandler } from '../types/eventTypes'

type handler = 'REDUX'|'USE_STATE'|undefined

export const createOnClickHandler = (type: handler): OnClickHandler => ({
  type,
  fn: jest.fn()
})

export const createOnSelectHandler = (type: handler): OnSelectHandler => ({
  type,
  fn: jest.fn()
})

// The datum in a Victory chart are rendered as SVG path elements
export const getPaths = (component: React.ReactElement): NodeListOf<SVGPathElement> => {
  const { container } = render(component)
  return container.querySelectorAll('path')
}