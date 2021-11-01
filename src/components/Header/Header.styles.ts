import { styled } from '../../stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$medium2 $large2 $medium2 $medium2',
});

export const HeaderLogo = styled('a', {
  display: 'flex',
  alignItems: 'center',
});

export const HeaderAvatar = styled('div', {
  cursor: 'pointer',
  backgroundColor: '$accent3',
  width: '$large1',
  height: '$large1',
  borderRadius: '$circle',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: '$accent5',
  },
});
