import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large'
  label?: string
  variant?: 'text' | 'outlined' | 'contained'
  onClick?: () => void
}

export const Button = ({
  size = 'medium',
  label,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {label}
    </MuiButton>
  )
}
