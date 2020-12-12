import React from 'react'

import BarChart from './components/barChart/BarChart'
import EventfulBarChart from './components/barChart/EventfulBarChart'
import ScatterChart from './components/scatter/ScatterChart'
import { barData, eventData } from './components/barChart/data'
import { scatterData } from './components/scatter/data'
import { clickHandler } from './events/BarChartEvents'

const style = {
  height: '50%',
  width: '50%'
}

const App: React.FC = () => {
  return (
    <div className='App' style={style}>
      <EventfulBarChart
        data={eventData}
        clickHandler={clickHandler}
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