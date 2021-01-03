import {
  BarChartComponent,
  StackedBarChartComponent,
  ScatterChartComponent,
  ScatterSelectionComponent
} from '../index'

describe('Chart components are exported', () => {
  it('BarChartComponent is truthy', () => {
    expect(BarChartComponent).toBeTruthy()
  })

  it('StackedBarChartComponent is truthy', () => {
    expect(StackedBarChartComponent).toBeTruthy()
  })

  it('ScatterChartComponent is truthy', () => {
    expect(ScatterChartComponent).toBeTruthy()
  })

  it('ScatterSelectionComponent is truthy', () => {
    expect(ScatterSelectionComponent).toBeTruthy()
  })

  // Don't test Table because Material UI breaks GitHub actions...
})