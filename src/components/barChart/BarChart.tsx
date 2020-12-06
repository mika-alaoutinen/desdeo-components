import React from 'react'
import { Props } from './types'

const BarChart: React.FC<{ props: Props }> = ({ props }) => {
  const { data } = props

  const printData = () => {
    data.forEach(d => console.log('data row', d))
  }
  
  return (
    <div>
      This is a bar chart
      <button onClick={printData}>print</button>
    </div>
  )
}

export default BarChart