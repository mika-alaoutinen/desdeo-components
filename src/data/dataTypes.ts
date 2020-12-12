// Add interfaces for different optimization methods here.

export interface Variable {
  name: string,
  value: number
}

export interface Parameter {
  parameter: number
}

export interface Iteration {
  variables: Variable[],
  parameters: Parameter[],
  iteration: number
}