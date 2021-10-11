import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$mauve1',
    color: '$mauve12',
  },

  'body, input, button, textarea': {
    fontFamily: '$poppins',
    fontWeight: '$regular',
    fontSize: '$small',
  },
});
