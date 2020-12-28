import React from 'react'
// Note: Material UI dependencies must be imported like this to work with Storybook.
// Importing like this breaks stuff: import { Table } from @material-ui/core.
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { onClickHandler } from '../../events/onClick'
import { DataProps } from '../../types/dataTypes'

const MaterialTable: React.FC<DataProps> = ({ data, setData, reduxAction }) => {
  
  const renderHeadings = (headings: string[]): JSX.Element[] =>
    headings.map(heading =>
      <TableCell key={heading} align='right'>{heading}</TableCell>
    )
  
  const renderRows = (): JSX.Element[] =>
    data.map(datum =>
      <TableRow
        key={datum.id}
        hover
        onClick={() => onClickHandler(datum, data, setData, reduxAction)}
        selected={datum.isSelected}
      >
        <TableCell align='right' component='th' scope='row'>{datum.label ? datum.label : 'no label'}</TableCell>
        <TableCell align='right' component='th' scope='row'>{datum.x}</TableCell>
        <TableCell align='right' component='th' scope='row'>{datum.y}</TableCell>
        <TableCell align='right' component='th' scope='row'>{datum.isSelected ? 'yes' : 'no'}</TableCell>
      </TableRow>
    )
  
  return (
    <TableContainer component={Paper} style={{ width: '50%' }}>
      <Table aria-label='material ui table'>

        <TableHead>
          <TableRow>
            {renderHeadings([ 'Label', 'X', 'Y', 'Selected' ])}
          </TableRow>
        </TableHead>

        <TableBody>
          {renderRows()}
        </TableBody>
        
      </Table>
    </TableContainer>
  )
}

export default MaterialTable