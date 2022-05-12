import React from 'react';
import Lottie from 'react-lottie';

import { CarAnimation } from '@assets/index';

interface CarAnimationProps {
  style?: {};
}

const CarAnimationComponent: React.FC<CarAnimationProps> = (
  { style }: CarAnimationProps,
) => (
  <Lottie
    style={style}
    options={{
      loop: true,
      autoplay: true,
      animationData: CarAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height="40%"
    width="40%"
    isClickToPauseDisabled
  />
);

export default CarAnimationComponent;
