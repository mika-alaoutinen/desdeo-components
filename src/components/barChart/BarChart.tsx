import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { BarPropsExt } from '../../types/extendedTypes'
import { changeDatumColor } from '../../events/BarChartEvents'
import { Datum } from '../../types/dataTypes'

interface Props {
  data: Datum[],
  onClick?: (event: Datum) => void
}

const BarChart: React.FC<Props> = ({ data, onClick }) => {
  
  const clickHandler = (props: BarPropsExt) => {
    console.log('props', props)
    
    if (onClick) {
      const datum = setIsSelected(props.datum)
      props.datum = datum
      onClick(datum)
    }
    return changeDatumColor(props)
  }

  const setIsSelected = (datum: Datum): Datum => {
    return datum.isSelected === undefined
      ? {
        ...datum,
        isSelected: true
      }
      : {
        ...datum,
        isSelected: !datum.isSelected
      }
  }
  
  return (
    <ChartContainer>
      <VictoryBar
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => [{
                mutation: (props: BarPropsExt) => clickHandler(props)
              }]
            }
          },
        ]}
      />
    </ChartContainer>
  )
}

export default BarChart