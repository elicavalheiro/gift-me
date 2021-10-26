import { styled } from '../../../stitches.config';

export const SidebarItemContainer = styled('a', {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  height: '$large2',
  padding: '0 $medium2',
  width: '100%',
  borderRadius: '$medium',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$medium',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: 'rgba(72, 26, 20, 0.2)',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: 'rgba(72, 26, 20, 0.2)',
      },
    },
    hasSubItem: {
      true: {
        fontWeight: '$bold',
      },
    },
    isSubItem: {
      true: {
        justifyContent: 'flex-start',
        fontWeight: '$regular',
        fontSize: '$small',
      },
    },
  },
});
