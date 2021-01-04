export type backgroundColor = 'white' | 'whitesmoke'

export const tableStyle: React.CSSProperties = {
  border: '1px solid lightgrey',
  borderCollapse: 'collapse',
  width: '50%',
}

export const padding: React.CSSProperties = {
  padding: '1em',
  textAlign: 'right'
}

export const rowStyle = (isSelected: boolean|undefined): React.CSSProperties => ({
  ...tableStyle,
  color: isSelected ? 'tomato' : 'black'
})