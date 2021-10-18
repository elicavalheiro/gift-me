import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '../../stitches.config';

export const CheckboxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$small1',
})

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  width: '$medium2',
  height: '$medium2',
  borderRadius: '$small',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 0 2px $colors$mauve11`,
  transition: 'background-color 0.2s ease',

  '&:hover': { backgroundColor: '$green4' },

  '&[data-state=checked]': {
    background: '$green4',
    boxShadow: '0 0 0 2px $colors$green9'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    background: '$mauve6',
    color: '$mauve10',
    boxShadow: '0 0 0 2px $colors$mauve10',
  }
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$green9',

  '&[data-disabled]': {
    color: '$mauve10'
  }
});

export const CheckboxLabel = styled('label', {
  marginLeft: '$small2',
  color: '$mauve12',
  userSelect: 'none',
})