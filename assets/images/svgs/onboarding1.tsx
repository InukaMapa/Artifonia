import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

/**
 * Minimal placeholder SVG for onboarding artwork.
 * Keeps the original export name so imports remain unchanged.
 */
const OnBoarding1: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
    <Rect x={0} y={0} width={100} height={100} fill="#EFEFF4" />
    <Circle cx={50} cy={40} r={22} fill="#250152" />
  </Svg>
);

export default OnBoarding1;
