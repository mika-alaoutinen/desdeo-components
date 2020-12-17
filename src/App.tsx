import React from 'react'

import BarChart from './components/barChart/BarChart'
import ScatterChart from './components/scatter/ScatterChart'
import StackedBarChart from './components/barChart/StackedBarChart'
import { barData, data } from './data'
import { Datum } from './types/dataTypes'

const style = {
  height: '50%',
  width: '50%'
}

const App: React.FC = () => {

  const printData = ({ x, y, isSelected }: Datum) => {
    console.log('x', x, 'y', y, 'isSelected', isSelected)
  }

  return (
    <div className='App' style={style}>
      <BarChart
        data={data}
        onClick={printData}
      />

      <ScatterChart data={data} />
      
      <StackedBarChart
        data={barData}
        onClick={() => console.log('bar chart data', barData)}
      />
    </div>
  )
}

export default App