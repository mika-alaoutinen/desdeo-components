import { Datum, DatumProps } from '../types/dataTypes'

export const clickHandler = (
  datum: Datum,
  onClickCallback?: (event: Datum) => void
): DatumProps => {

  const editedProps = editSelected(datum)
  if (onClickCallback) {
    onClickCallback(editedProps.datum)
  }
  return editedProps
}

const editSelected = (datum: Datum): DatumProps => ({
  datum: datum.isSelected === undefined
    ? {
      ...datum,
      isSelected: true
    }
    : {
      ...datum,
      isSelected: !datum.isSelected
    }
})