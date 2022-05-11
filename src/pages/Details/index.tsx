/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Slider from 'react-slick';

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

  const [currentCar, setCurrentCar] = useState('image2');

  const { car }: any = state;

  const showAlert = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '10px',
    afterChange: (currentSlide: number) => setCurrentCar(`image${currentSlide + 1}`),
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
          <CarImage
            src={car[currentCar].url}
            alt={car.name}
          />

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

      <div>
        <Slider {...settings}>
          <img src={car.image1.url} alt={car.name} style={{ width: 100, height: 100 }} />
          <img src={car.image2.url} alt={car.name} style={{ width: 100, height: 100 }} />
          <img src={car.image3.url} alt={car.name} style={{ width: 100, height: 100 }} />
          <img src={car.image4.url} alt={car.name} style={{ width: 100, height: 100 }} />
          <img src={car.image5.url} alt={car.name} style={{ width: 100, height: 100 }} />
        </Slider>
      </div>
    </Container>
  );
};

export default Details;
