import { dataset } from '../../data/testdata'
import { BarChartWrapperProps } from '../../types/chartTypes'

// Used to configure Storybook's Controls view
export const argTypes = {
  data: {
    control: {
      type: 'object'
    }
  },
  grouping: {
    control: {
      type: 'inline-radio',
      options: [ 'alternatives', 'criteria' ]
    }
  },
  onClick: {
    table: {
      disable: true
    }
  },
  orientation: {
    control: {
      type: 'inline-radio',
      options: [ 'horizontal', 'vertical' ]
    }
  }
}

export const props: BarChartWrapperProps = {
  data: dataset,
  grouping: 'alternatives',
  onClick: (coordinate) => console.log('coordinate', coordinate),
  orientation: 'horizontal'
}