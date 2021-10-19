import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes, styled } from '../../../stitches.config';

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$mauve4',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: 'transform',
  },
  '&:focus': { outline: 'none' },
});

export const DialogHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$medium2 $medium2 $medium1 $medium2',
  borderBottom: '1px solid $mauve7',
});

export const DialogTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  color: '$mauve12',
  fontSize: '$large',
  fontWeight: '$bold',
});

export const DialogCloseIcon = styled(DialogPrimitive.Close, {
  padding: '$small1',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
});

export const DialogDescription = styled(DialogPrimitive.Description, {
  padding: '$medium1 $medium2',
  color: '$mauve12',
  fontSize: 15,
  lineHeight: 1.5,
});

export const DialogFooter = styled('div', {
  padding: '$medium1 $medium2 $medium2 $medium2',
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid $mauve7',

  variants: {
    onlySuccess: {
      true: { justifyContent: 'flex-end' },
    },
  },
});

export const DialogClose = styled(DialogPrimitive.Close, {
  background: 'transparent !important',
  border: 'none',
});
