import React from 'react'
import { VictoryAxis, VictoryBrushLine, VictoryLine } from 'victory'

import { Attribute, AttributeSet } from '../../types/dataTypes'
import { DomainTuple } from '../../types/victoryTypes'
import { OnLineClickHandler } from './types'

type OnDomainChange = (domainTuple: DomainTuple, name: string) => void

const drawAxis = (axisComponent: JSX.Element, offsetX: number, tickValue: number): JSX.Element => (
  <VictoryAxis
    key={axisComponent.key}
    axisComponent={axisComponent}
    dependentAxis
    offsetX={offsetX}
    style={{
      tickLabels: {
        fontSize: 15,
        padding: 15,
        pointerEvents: 'none',
      },
    }}
    tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
    tickFormat={tick => (tick * tickValue).toPrecision(2)}
  />
)

/*
  About onBrushDomainChange:
  The domain numbers receoved from the component are in the wrong order of [max, min].
  Flip the numbers around so that they make sense as a range.
  Props should always have a name, even though the type indicates that name may be undefined.
  [0, 0] stops the application from crashing if the brush is clicked and not dragged
*/
const drawBrushLine = (attribute: string, onDomainChange: OnDomainChange): JSX.Element => (
  <VictoryBrushLine
    key={attribute}
    name={attribute}
    onBrushDomainChange={(domain, props) => {
      const domainTuple: DomainTuple = domain ? [domain[1] as number, domain[0] as number] : [0, 0]
      const name = props?.name ? props.name : 'default name'
      return onDomainChange(domainTuple, name)
    }}
    width={20}
  />
)

const drawLine = (
  { attributes, label }: AttributeSet,
  opacity: number,
  onClick: OnLineClickHandler
): JSX.Element => (
  <VictoryLine
    key={label}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onClick: () => [
            {
              eventKey: 'all',
              mutation: ({ data }) => {
                onClick(mapToAttributes(data))
                return { style: { stroke: 'gold', strokeWidth: 2.5 } }
              },
            },
          ],
          onMouseOver: () => [
            {
              eventKey: 'all',
              mutation: () => ({ style: { stroke: 'green', strokeWidth: 2.5 } }),
            },
          ],
          onMouseOut: () => [
            {
              eventKey: 'all',
              mutation: () => ({}),
            },
          ],
        },
      },
    ]}
    name={label}
    data={attributes}
    groupComponent={<g />}
    style={{
      data: {
        stroke: 'tomato',
        opacity: opacity,
      },
    }}
  />
)

// A hackerman solution for mapping any type data into Attributes. The purpose
// is to get rid of extra fields that expose Victory's internal implementation details.
const mapToAttributes = (data: Attribute[]): Attribute[] =>
  data.map(({ id, isSelected, x, y }) => ({ id, isSelected, x, y }))

export { drawAxis, drawBrushLine, drawLine }
