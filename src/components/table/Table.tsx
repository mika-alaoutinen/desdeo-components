import React from 'react'
import { DataProps, Datum } from '../../types/dataTypes'

const Table: React.FC<DataProps> = ({ data }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(({ id, isSelected, label, x, y }: Datum) =>
      <tr key={id}>
        <td>{label ? label : 'no label'}</td>
        <td>{x}</td>
        <td>{y}</td>
        <td>{isSelected ? 'yes' : 'no'}</td>
      </tr>
    )

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