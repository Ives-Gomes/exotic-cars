import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { Button } from '@components/index';

import { convertPrice } from '@shared/helpers/convertPrice';

import theme from '@utils/theme';
import {
  CarImage,
  Color,
  Container,
  HeaderContent,
  ImageContent,
  Logo,
  Price,
  SectionContent,
  Title,
} from './styles';

const Details = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const { car }: any = state;

  const showAlert = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

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
        <Button
          background={theme.white}
          color={theme.medium_black}
          borderColor={theme.medium_black}
          type="button"
          onClick={() => navigate('/')}
        >
          <AiOutlineArrowLeft
            size={14}
            style={{ marginRight: 5 }}
          />
          Voltar ao catálogo
        </Button>

        <ImageContent>
          <CarImage src={car.image2.url} alt={car.name} />

          <Button
            background={theme.medium_black}
            color={theme.white}
            borderColor={theme.medium_black}
            type="button"
            onClick={() => showAlert()}
            style={{
              marginTop: 20,
            }}
          >
            Agende agora
            <AiOutlineArrowRight
              size={14}
              style={{ marginLeft: 5 }}
            />
          </Button>
        </ImageContent>

        <Color>
          <span>01</span>
          {' '}
          blue
        </Color>
      </SectionContent>
    </Container>
  );
};

export default Details;
