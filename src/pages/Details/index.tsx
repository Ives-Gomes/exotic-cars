import React from 'react';
import { useLocation } from 'react-router-dom';

import { convertPrice } from '@shared/helpers/convertPrice';

import {
  CarImage,
  Container,
  HeaderContent,
  Logo,
  Price,
  SectionContent,
  Title,
} from './styles';

const Details = () => {
  const { state }: any = useLocation();

  const { car }: any = state;

  return (
    <Container>
      <HeaderContent>
        <Logo src={car?.logo} alt={car?.name} />

        <div>
          <Title>
            {`${car?.name} ${car?.model}`}
          </Title>

          <Price>{`${convertPrice(car?.price)}/dia`}</Price>
        </div>
      </HeaderContent>

      <SectionContent>
        <button type="button">Voltar ao catálogo</button>

        <CarImage src={car.image2.url} alt={car.name} />

        <p>01 blue</p>
      </SectionContent>
    </Container>
  );
};

export default Details;
