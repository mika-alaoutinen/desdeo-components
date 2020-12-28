import React from 'react'

import { onClickHandler } from '../../events/onClick'
import { DataProps } from '../../types/dataTypes'
import { tableRowStyle } from '../../styles/styles'

import '../../styles/Table.css'

const Table: React.FC<DataProps> = ({ data, setData }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(datum => {
      const { id, isSelected, label, x, y } = datum
      return (
        <tr
          key={id}
          onClick={() => onClickHandler(datum, data, setData)}
          style={tableRowStyle(isSelected)}
        >
          <td>{label ? label : 'no label'}</td>
          <td>{x}</td>
          <td>{y}</td>
          <td>{isSelected ? 'yes' : 'no'}</td>
        </tr>
      )
    })

  return (
    <table>
      <thead className='thead'>
        <tr>
          <th>Label</th>
          <th>X</th>
          <th>Y</th>
          <th>selected</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default Table