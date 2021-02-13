import React from 'react'

import TableRow from './TableRow'
import { padding, tableStyle } from './tableStyles'
import { OnClickChart } from '../../types/chartTypes'

const Table: React.FC<OnClickChart> = ({ data, onClick }) => {

  const renderHeadings = (headings: string[]): JSX.Element[] =>
    headings.map(heading =>
      <th key={heading} style={padding}>
        {heading}
      </th>
    )

  const renderRows = (): JSX.Element[] =>
    data.map(datum =>
      <TableRow
        key={datum.id}
        datum={datum}
        onClick={onClick}
      />
    )

  return (
    <table style={tableStyle}>

      <thead>
        <tr>
          {renderHeadings([ 'Label', 'X', 'Y', 'Selected' ])}
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}

export default Table