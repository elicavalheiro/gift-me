import { VariantProps } from '@stitches/react';
import { styled } from '../../stitches.config';

export const Container = styled('button', {
  padding: '$small2 $medium3',
  borderRadius: '$medium',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'all ease 0.2s',

  variants: {
    type: {
      primary: {
        backgroundColor: '$accent9',
        color: '$accent12',
        border: 'none',

        '&:hover': {
          backgroundColor: '$accent8',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $accent9',
        color: '$accent9',

        '&:hover': {
          backgroundColor: '$accent4',
        },
      },
      rounded: {
        borderRadius: '$circle',
        backgroundColor: '$accent9',
        color: '$accent12',
        border: 'none',
        padding: '$small2 $medium1',

        '&:hover': {
          backgroundColor: '$accent8',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '$accent9',

        '&:hover': {
          backgroundColor: '$accent4',
        },
      },
    },
  },
});

export type ContainerVariants = VariantProps<typeof Container>;
