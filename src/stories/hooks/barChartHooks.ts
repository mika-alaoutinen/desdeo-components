import { useState } from 'react'
import { dataset } from '../../data/testdata'
import { BarChartWrapperProps } from '../../types/chartTypes'
import { DataSet, Value } from '../../types/dataTypes'

export const useOnClickHandler = (): BarChartWrapperProps => {
  const [data, setData] = useState<DataSet[]>(dataset)

  const onClick = (value: Value): void => {
    setData(editData(value, data))
  }

  return {
    data,
    grouping: 'alternatives',
    onClick,
    orientation: 'horizontal',
  }
}

const editData = (clicked: Value, data: DataSet[]): DataSet[] =>
  data.map(column => {
    const data = column.data.map(value => (value.id === clicked.id ? editSelected(clicked) : value))
    return { ...column, data }
  })

const editSelected = (value: Value): Value =>
  value.isSelected === undefined ? setSelected(value, true) : setSelected(value, !value.isSelected)

const setSelected = (value: Value, isSelected: boolean): Value => ({
  ...value,
  isSelected,
})
