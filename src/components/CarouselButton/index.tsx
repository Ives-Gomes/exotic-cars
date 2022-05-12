import React from 'react';

import { Container } from './styles';

const CarouselButton = ({
  className, onClick, children,
}: any) => (
  <Container
    className={className}
    onClick={onClick}
  >
    {children}
  </Container>
);

export default CarouselButton;
