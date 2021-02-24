export type backgroundColor = 'white' | 'whitesmoke'

const ROW_SELECTED_COLOR = 'tomato'

const tableStyle: React.CSSProperties = {
  border: '1px solid lightgrey',
  borderCollapse: 'collapse',
  margin: '2em',
}

const padding: React.CSSProperties = {
  padding: '1em',
  textAlign: 'right',
}

const cellStyle = (isSelected: boolean): React.CSSProperties => ({
  ...padding,
  color: isSelected ? ROW_SELECTED_COLOR : 'black',
})

const rowStyle = (color: backgroundColor, isSelected?: boolean): React.CSSProperties => ({
  ...tableStyle,
  background: isSelected ? ROW_SELECTED_COLOR : color,
})

export { ROW_SELECTED_COLOR, cellStyle, rowStyle, tableStyle, padding }
