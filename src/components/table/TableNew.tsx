import React from 'react'

import { onClickHandler } from '../../events/onClick'
import { OnClickChart } from '../../types/chartTypes'
import { padding, rowStyle, tableStyle } from './tableStyles'
import { Datum } from '../../types/dataTypes'

const TableNew: React.FC<OnClickChart> = ({ data, onClick }) => {

  const renderHeadings = (headings: string[]): JSX.Element[] =>
    headings.map(heading =>
      <th key={heading} style={padding}>
        {heading}
      </th>
    )

  const renderRows = (): JSX.Element[] =>
    data.map(datum => renderRow(datum))

  const renderRow = (datum: Datum): JSX.Element => {
    const { id, label, x, y, isSelected } = datum
    return (
      <tr
        key={id}
        onClick={() => onClickHandler(datum, data, onClick)}
        style={rowStyle(isSelected)}
      >
        {label ? renderCell(label) : renderCell('no label')}
        {renderCell(x.toString())}
        {renderCell(y.toString())}
        {isSelected ? renderCell('true') : renderCell('false')}
      </tr>
    )
  }

  const renderCell = (text: string): JSX.Element =>
    <td style={padding}>{text}</td>

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

export default TableNew