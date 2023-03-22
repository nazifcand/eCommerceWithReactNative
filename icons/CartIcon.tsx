import Svg, {Path} from 'react-native-svg';
import React from 'react';

const CartIcon = ({color = 'black', ...args}) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 21 20" fill="none">
      <Path
        d="M14.4996 6C14.4996 7.06087 14.0782 8.07828 13.328 8.82843C12.5779 9.57857 11.5605 10 10.4996 10C9.43872 10 8.42131 9.57857 7.67116 8.82843C6.92102 8.07828 6.49959 7.06087 6.49959 6M2.13281 5.40138L1.43281 13.8014C1.28243 15.6059 1.20724 16.5082 1.51227 17.2042C1.78027 17.8157 2.24462 18.3204 2.83177 18.6382C3.50006 19 4.40545 19 6.21623 19H14.783C16.5937 19 17.4991 19 18.1674 18.6382C18.7546 18.3204 19.2189 17.8157 19.4869 17.2042C19.7919 16.5082 19.7167 15.6059 19.5664 13.8014L18.8664 5.40138C18.737 3.84875 18.6723 3.07243 18.3285 2.48486C18.0257 1.96744 17.5748 1.5526 17.0341 1.29385C16.42 1 15.641 1 14.083 1L6.91623 1C5.35821 1 4.57921 1 3.9651 1.29384C3.42433 1.5526 2.97349 1.96744 2.67071 2.48486C2.32689 3.07243 2.26219 3.84875 2.13281 5.40138Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...args}
      />
    </Svg>
  );
};

export default CartIcon;
