import React, { useState } from 'react'

import DataTableRow from './DataTableRow'
import { DataTableClickHandler } from './DataTable'
import { backgroundColor, rowStyle } from '../tableStyles'

interface Props {
  data: number[],
  onClick: DataTableClickHandler
}

const DataTableColumn: React.FC<Props> = ({ data, onClick }) => {
  const [ color, setColor ] = useState<backgroundColor>('white')

  const renderRows = (): JSX.Element[] =>
    data.map(value =>
      <DataTableRow
        key={value}
        row={value}
        onClick={onClick}
      />
    )

  return (
    <tr
      onMouseEnter={() => setColor('whitesmoke')}
      onMouseLeave={() => setColor('white')}
      style={rowStyle(color)}
    >
      {renderRows()}
    </tr>
  )
}

export default DataTableColumn