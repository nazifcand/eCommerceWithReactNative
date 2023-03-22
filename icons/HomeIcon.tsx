import Svg, {Path} from 'react-native-svg';
import React from 'react';

const HomeIcon = ({color = 'black', ...args}) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 21 20" fill="none">
      <Path
        d="M6.5 16H14.5M9.5177 1.76401L2.73539 7.03914C2.28202 7.39176 2.05534 7.56807 1.89203 7.78887C1.74737 7.98446 1.6396 8.2048 1.57403 8.43907C1.5 8.70353 1.5 8.99071 1.5 9.56507V16.8C1.5 17.9201 1.5 18.4802 1.71799 18.908C1.90973 19.2843 2.21569 19.5903 2.59202 19.782C3.01984 20 3.57989 20 4.7 20H16.3C17.4201 20 17.9802 20 18.408 19.782C18.7843 19.5903 19.0903 19.2843 19.282 18.908C19.5 18.4802 19.5 17.9201 19.5 16.8V9.56507C19.5 8.99071 19.5 8.70353 19.426 8.43907C19.3604 8.2048 19.2526 7.98446 19.108 7.78887C18.9447 7.56807 18.718 7.39176 18.2646 7.03914L11.4823 1.76401C11.131 1.49076 10.9553 1.35413 10.7613 1.30162C10.5902 1.25528 10.4098 1.25528 10.2387 1.30162C10.0447 1.35413 9.86902 1.49076 9.5177 1.76401Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...args}
      />
    </Svg>
  );
};

export default HomeIcon;
