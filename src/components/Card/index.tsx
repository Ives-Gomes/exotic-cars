import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { toast } from 'react-toastify';

import { Car } from '@interfaces/cars/carsInterfaces';

import { convertPrice } from '@shared/helpers/convertPrice';

import {
  Container,
  DotsContent,
  FooterText,
  Image,
  Price,
  PriceContent,
  Subtitle,
  Title,
  TitleContent,
} from './styles';

interface CardProps {
  car: Car;
}

const Card: React.FC<CardProps> = ({ car }: CardProps) => {
  const moreButtonHandler = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

  return (
    <Container>
      <TitleContent>
        <div>
          <Title>{car.name}</Title>
          <Subtitle>{car.model}</Subtitle>
        </div>

        <DotsContent onClick={() => moreButtonHandler()}>
          <BiDotsHorizontalRounded />
        </DotsContent>
      </TitleContent>

      <div>
        <Image src={car.image} alt={car.name} />
      </div>

      <PriceContent>
        <FooterText>Agende Agora</FooterText>

        <Price>
          {convertPrice(car.price)}
          <span>/dia</span>
        </Price>
      </PriceContent>
    </Container>
  );
};

export default Card;
