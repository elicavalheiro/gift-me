import { styled } from '../../stitches.config';

export const SidebarContainer = styled('aside', {
  display: 'flex',
  position: 'sticky',
  top: 0,
  left: 0,
});

export const SidebarContent = styled('div', {
  height: '100vh',
  background:
    'linear-gradient(180deg, $colors$accent9 7.03%, rgba(229, 72, 77, 0) 86.57%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  padding: '$small3',

  transition: 'transform 0.2s ease',

  variants: {
    collapsed: {
      true: {
        transform: 'translateX(-190px)',
      },
      false: {
        transform: 'translateX(0)',
      },
    },
  },
});

export const SidebarButton = styled('button', {
  cursor: 'pointer',
  background: '$accent9',
  color: '$accent12',
  border: 'none',
  width: '$large1',
  height: '$large1',
  borderRadius: '0px $medium $medium 0px',
  marginTop: '$medium1',
  marginLeft: '-$small1',
  transition: 'transform 0.2s ease',

  variants: {
    collapsed: {
      true: {
        transform: 'translateX(-190px)',
      },
      false: {
        transform: 'translateX(0)',
      },
    },
  },
});
