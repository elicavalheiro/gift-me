import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { styled, keyframes } from '../../stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Dropdown = DropdownPrimitive.Root;

export const DropdownContent = styled(DropdownPrimitive.Content, {
  minWidth: 220,
  backgroundColor: '$mauve3',
  borderRadius: '$medium',
  padding: '$small2',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const itemStyles = {
  cursor: 'pointer',
  fontSize: '$small',
  lineHeight: 1,
  color: '$mauve12',
  borderRadius: '$medium',
  display: 'flex',
  alignItems: 'center',
  height: '$large2',
  padding: '$none $small2',
  position: 'relative',
  paddingLeft: '$medium3',
  userSelect: 'none',
  outline: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$mauve5',
    color: '$mauve12',
  },
};

export const DropdownItem = styled(DropdownPrimitive.Item, { ...itemStyles });

export const DropdownArrow = styled(DropdownPrimitive.Arrow, {
  fill: '$mauve3',
});

export const DropdownTrigger = styled(DropdownPrimitive.Trigger, {
  background: 'transparent !important',
  border: 'none',
  outline: 'none',
});
