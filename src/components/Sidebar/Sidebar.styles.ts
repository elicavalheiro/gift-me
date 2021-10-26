import { styled } from '../../stitches.config';

export const SidebarContainer = styled('aside', {
  display: 'flex',
});

export const SidebarContent = styled('div', {
  height: '100vh',
  background:
    'linear-gradient(180deg, $colors$accent9 7.03%, rgba(229, 72, 77, 0) 86.57%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    collapsed: {
      true: {
        width: '$small2',
      },
      false: {
        padding: '$small3',
        width: '200px',
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
});
