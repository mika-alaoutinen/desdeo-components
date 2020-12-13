import { BarProps } from 'victory'

// Extending type definitions that have missing type information
export interface BarPropsExt extends BarProps {
  style: {
    fill?: string
  }
}