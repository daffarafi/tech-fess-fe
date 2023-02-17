import { MouseEventHandler, ReactNode } from 'react'

export interface CustomButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary'
  fullWidth: boolean
  disabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
