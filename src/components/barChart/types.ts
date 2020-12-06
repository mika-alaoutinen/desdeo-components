export interface Props {
  data: TestData[],
  onClick?: () => void
}

export interface TestData {
  quarter: number,
  earnings: number
}