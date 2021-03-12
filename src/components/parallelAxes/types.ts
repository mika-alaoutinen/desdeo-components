import { Attribute, AttributeSet } from '../../types/dataTypes'

type OnChangeHandler = (active: AttributeSet[]) => void
type OnLineClickHandler = (clicked: Attribute[]) => void
type OnClickHandler = (attribute_tuple: [number, number]) => void

export type { OnChangeHandler, OnLineClickHandler, OnClickHandler }
