import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  label,
  ...props
}) => {
  return (
    <MuiButton variant='contained' size={size} {...props}>
      {label}
    </MuiButton>
  );
};
