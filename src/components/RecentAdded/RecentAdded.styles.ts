import { styled } from '../../stitches.config';

export const RecentAddedContainer = styled('div', {
  background:
    'linear-gradient(180deg, $accent9 0%, rgba(229, 72, 77, 0) 85.06%);',
  borderRadius: '$large',
  marginTop: '$medium3',

  padding: '$large2',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$large2',
});

export const RecentAddedFlag = styled('div', {
  background: '$accent9',
  position: 'absolute',
  padding: '5px 10px',
  width: 110,
  marginTop: -65,
  color: '$white',
  borderRadius: '$medium $medium 0 0',
  fontSize: '$xsmall',
});
