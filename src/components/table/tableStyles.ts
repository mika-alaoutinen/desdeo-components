export type backgroundColor = 'white' | 'whitesmoke'

const ROW_SELECTED_COLOR = '#ffdfda'

const tableStyle: React.CSSProperties = {
  border: '1px solid lightgrey',
  borderCollapse: 'collapse',
  width: '50%',
}

const padding: React.CSSProperties = {
  padding: '1em',
  textAlign: 'right'
}

const rowStyle = (color: backgroundColor, isSelected?: boolean): React.CSSProperties => ({
  ...tableStyle,
  background: isSelected ? ROW_SELECTED_COLOR : color
})

export {
  ROW_SELECTED_COLOR, tableStyle, padding, rowStyle
}