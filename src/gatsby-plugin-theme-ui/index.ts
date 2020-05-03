import merge from 'lodash/merge';

import {colors, buttons} from './colors';
import {fonts, fontSizes, fontWeights, lineHeights} from './typography';

const breakpoints = ['40em', '52em', '64em'];
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default merge({
  colors,
  buttons,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  space
});