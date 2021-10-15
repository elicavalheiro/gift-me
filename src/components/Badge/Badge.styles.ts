import { styled } from '../../stitches.config';

export const BadgeWrapper = styled('div', {
  display: 'flex',
});

export const BadgeContainer = styled('div', {
  padding: '$none $small2',

  borderRadius: '$medium',
  display: 'flex',

  variants: {
    color: {
      blue: {
        background: '$blue3',
        border: '1px solid $blue7',
      },
      pink: {
        background: '$pink3',
        border: '1px solid $pink7',
      },
      yellow: {
        background: '$yellow3',
        border: '1px solid $yellow7',
      },
      purple: {
        background: '$purple3',
        border: '1px solid $purple7',
      },
    },
  },
});
