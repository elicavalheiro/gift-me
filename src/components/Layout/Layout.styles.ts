import { keyframes, styled } from '../../stitches.config';

const openSidebar = keyframes({
  '0%': { gridTemplateColumns: '40px 1fr' },
  '100%': { gridTemplateColumns: '230px 1fr' },
});

const closeSidebar = keyframes({
  '0%': { gridTemplateColumns: '230px 1fr' },
  '100%': { gridTemplateColumns: '40px 1fr' },
});

export const LayoutContainer = styled('div', {
  maxHeight: '100vh',
  width: '100%',
  display: 'grid',

  gridTemplate: `
    "sidebar header" 50px
    "sidebar content" 1fr
  `,

  gridTemplateColumns: '40px 1fr',

  variants: {
    collapsed: {
      true: {
        animation: `${closeSidebar} 0.2s ease`,
        gridTemplateColumns: '40px 1fr',
      },
      false: {
        animation: `${openSidebar} 0.2s ease`,
        gridTemplateColumns: '230px 1fr',
      },
    },
  },
});

export const LayoutSidebar = styled('div', {
  gridArea: 'sidebar',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const LayoutHeader = styled('div', {
  gridArea: 'header',
});

export const LayoutContent = styled('div', {
  gridArea: 'content',

  padding: '$medium2 $large2 $medium2 $medium2',
});

export const AddButton = styled('div', {
  position: 'fixed',
  bottom: '$large2',
  right: '$large2',
});
