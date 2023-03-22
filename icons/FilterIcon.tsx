import Svg, {Path} from 'react-native-svg';
import React from 'react';

const FilterIcon = ({color = 'black', ...args}) => {
  return (
    <Svg width="20" height="14" viewBox="0 0 20 14" fill="none" {...args}>
      <Path
        d="M4 7H16M1 1H19M7 13H13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FilterIcon;
