import { styled } from '../../stitches.config';

export const RecentAddedContainer = styled('div', {
  backgroundColor: '$accent9',
  borderRadius: '$large',

  padding: '$large2',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$large2',
});
