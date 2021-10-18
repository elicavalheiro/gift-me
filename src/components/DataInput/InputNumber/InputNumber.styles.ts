import NumberFormat from 'react-number-format';
import { styled } from '../../../stitches.config';

export const InputNumberContainer = styled(NumberFormat, {
  padding: '$small2 $medium1',
  borderRadius: '$medium',
  background: 'transparent',
  border: '2px solid $green7',
  outline: 'none',
  color: '$mauve12',
  transition: 'all ease 0.2s',

  '&:placeholder': {
    color: '$mauve10',
  },

  '&:focus': {
    border: '2px solid $green9',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    background: '$mauve6',
    color: '$mauve10',
    border: '2px solid transparent',
  },
});
