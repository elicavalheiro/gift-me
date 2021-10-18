import NumberFormat from 'react-number-format';
import { styled } from '../../stitches.config';

export const CardContainer = styled('div', {
  background: '$mauve2',
  padding: '$medium2',
  borderRadius: '$large',
  maxWidth: '400px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
  border: '1px solid $mauve3',
});

export const CardImage = styled('img', {
  borderRadius: '$large',
  width: '100%',
});

export const CardContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$medium2',
});

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& h2': {
    fontSize: '$large',
  },

  '& a': {
    textDecoration: 'none',
    color: '$blue11',
    fontSize: '$medium',
  },
});

export const CardContent = styled('p', {
  margin: '$small2 0 $medium1 0',
  color: '$mauve11',
  fontSize: '$medium',
});

export const CardBadges = styled('div', {
  display: 'flex',
  gap: '$small3',
  flexWrap: 'wrap',
  marginBottom: '$medium1',
});

export const CardFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const CardPrice = styled(NumberFormat, {
  padding: '$small1 $medium1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$green9',
  color: '$green12',
  borderRadius: '$medium',
});
