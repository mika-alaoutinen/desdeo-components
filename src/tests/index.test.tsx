import {
  BarChartComponent,
  StackedBarChartComponent,
  ScatterChartComponent,
  ScatterSelectionComponent,
  TableComponent
} from '../index'

describe('Chart components are exported', () => {
  it('BarChartComponent is exported', () => {
    expect(BarChartComponent).toBeTruthy()
  })

  it('StackedBarChartComponent is exported', () => {
    expect(StackedBarChartComponent).toBeTruthy()
  })

  it('ScatterChartComponent is exported', () => {
    expect(ScatterChartComponent).toBeTruthy()
  })

  it('ScatterSelectionComponent is exported', () => {
    expect(ScatterSelectionComponent).toBeTruthy()
  })

  it('TableComponent is exported', () => {
    expect(TableComponent).toBeTruthy()
  })
})