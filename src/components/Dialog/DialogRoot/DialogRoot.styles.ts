import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes, styled } from '../../../stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  inset: 0,
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const DialogRoot = DialogPrimitive.Root;
