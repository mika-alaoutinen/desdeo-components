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