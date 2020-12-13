import React from 'react'

import BarChart from './components/barChart/BarChart'
import EventfulBarChart from './components/barChart/EventfulBarChart'
import ScatterChart from './components/scatter/ScatterChart'
import { barData, eventData, EventTestData } from './components/barChart/data'
import { scatterData } from './components/scatter/data'

const style = {
  height: '50%',
  width: '50%'
}

const App: React.FC = () => {
  return (
    <div className='App' style={style}>
      <EventfulBarChart
        data={eventData}
        onClick={( { x, y }: EventTestData) => console.log('x', x, 'y', y) }
      />

      <ScatterChart data={scatterData} />
      
      <BarChart
        data={barData}
        onClick={() => console.log('bar chart data', barData)}
      />
    </div>
  )
}

export default App