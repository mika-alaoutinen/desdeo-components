import React from 'react'
// Material UI dependencies must be imported like this to work with Storybook.
// Importing like this breaks stuff: import { Table } from @material-ui/core.
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { onClickHandler } from '../../events/onClick'
import { OnClickChart } from '../../types/chartTypes'

const Table: React.FC<OnClickChart> = ({ data, onClick }) => {

  const renderHeadings = (headings: string[]): JSX.Element[] =>
    headings.map(heading =>
      <TableCell key={heading} align='right'>{heading}</TableCell>
    )

  const renderRows = (): JSX.Element[] =>
    data.map(datum =>
      <TableRow
        key={datum.id}
        hover
        onClick={() => onClickHandler(datum, data, onClick)}
        selected={datum.isSelected}
      >
        {renderCell(datum.label, 'no label')}
        {renderCell(datum.x)}
        {renderCell(datum.y)}
        {datum.isSelected ? renderCell('yes') : renderCell('no')}
      </TableRow>
    )

  const renderCell = (text?: string|number, altText?: string): JSX.Element =>
    <TableCell
      align='right'
      component='th'
      scope='row'
    >
      {text ? text : altText}
    </TableCell>

  return (
    <TableContainer style={{ width: '50%' }}>
      <MaterialTable aria-label='material ui table'>

        <TableHead>
          <TableRow>
            {renderHeadings([ 'Label', 'X', 'Y', 'Selected' ])}
          </TableRow>
        </TableHead>

        <TableBody>
          {renderRows()}
        </TableBody>

      </MaterialTable>
    </TableContainer>
  )
}

export default Table