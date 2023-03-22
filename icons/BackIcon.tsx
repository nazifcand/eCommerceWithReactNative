import Svg, {Path} from 'react-native-svg';
import React from 'react';

const BackIcon = ({color = 'black', ...args}) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...args}>
      <Path
        d="M15 8H1M1 8L8 1M1 8L8 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;
