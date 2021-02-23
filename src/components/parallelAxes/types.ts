import { Attribute, AttributeSet } from '../../types/dataTypes'

type OnChangeHandler = (active: AttributeSet[]) => void
type OnLineClickHandler = (clicked: Attribute[]) => void

export type { OnChangeHandler, OnLineClickHandler }
