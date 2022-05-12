import React from 'react';

import { Background, Container, Image } from './styles';

interface CarImageProps {
  src: string;
  alt: string;
}

const CarImageComponent: React.FC<CarImageProps> = ({ src, alt }: CarImageProps) => (
  <Container>
    <Background className="backgroundImage" />

    <Image className="carImage" src={src} alt={alt} />
  </Container>
);

export default CarImageComponent;
