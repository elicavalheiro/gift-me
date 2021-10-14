import { styled } from '../../../stitches.config';

export const InputTextContainer = styled('input', {
  padding: '$small2 $medium1',
  borderRadius: '$medium',
  background: 'transparent',
  border: '2px solid $mauve7',
  outline: 'none',
  color: '$mauve12',
  transition: 'all ease 0.2s',

  '&:placeholder': {
    color: '$mauve10',
  },

  '&:focus': {
    border: '2px solid $accent9',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    background: '$mauve6',
    color: '$mauve10',
    border: '2px solid transparent',
  },
});
