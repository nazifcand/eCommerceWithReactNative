import Svg, {Path} from 'react-native-svg';
import React from 'react';

const HeartIcon = ({
  color = 'black',
  width = 21,
  height = 19,
  fillColor = 'none',
  ...args
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 19" fill={fillColor}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4937 3.22563C8.64426 1.06352 5.56026 0.481919 3.24309 2.46176C0.925921 4.44161 0.599695 7.7518 2.41938 10.0934C3.79383 11.862 7.69845 15.4126 9.52691 17.0443C9.86303 17.3442 10.0311 17.4942 10.2279 17.5532C10.3987 17.6045 10.5886 17.6045 10.7594 17.5532C10.9562 17.4942 11.1243 17.3442 11.4604 17.0443C13.2889 15.4126 17.1935 11.862 18.5679 10.0934C20.3876 7.7518 20.1012 4.42078 17.7442 2.46176C15.3872 0.502745 12.3431 1.06352 10.4937 3.22563Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...args}
      />
    </Svg>
  );
};

export default HeartIcon;
