/* eslint-disable no-useless-return */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Slider from 'react-slick';

import { Button, CarouselButton, CarImageComponent } from '@components/index';

import { convertPrice } from '@shared/helpers/convertPrice';

import theme from '@utils/theme';
import {
  CarImage,
  CarouselContainer,
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

  const numbersOfSlidesToShow = () => {
    if (car.images.length >= 3) {
      return 3;
    }

    return car.images.length;
  };

  const defineInitialSlide = () => {
    if (car.images.length === 1) {
      return 0;
    }

    return 1;
  };

  const [currentCarIndex, setCurrentCarIndex] = useState(defineInitialSlide());

  const changeSlide = (currentSlide: number) => {
    if (car.images.length >= 3) {
      setCurrentCarIndex(currentSlide >= 3 ? currentSlide - 3 : currentSlide);

      return;
    }

    setCurrentCarIndex(currentSlide >= 2 ? currentSlide - 2 : currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numbersOfSlidesToShow(),
    slidesToScroll: 1,
    initialSlide: defineInitialSlide(),
    centerMode: true,
    centerPadding: '1px',
    afterChange: (currentSlide: number) => changeSlide(currentSlide),
    nextArrow: <CarouselButton><BsArrowRight size={18} /></CarouselButton>,
    prevArrow: <CarouselButton><BsArrowLeft size={18} /></CarouselButton>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div style={{ width: '100%' }}>
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
              src={car.images[currentCarIndex].url}
              alt={car.name}
            />

            <Button
              background={theme.medium_black}
              color={theme.white}
              borderColor={theme.medium_black}
              type="button"
              onClick={() => showAlert()}
              style={{
                marginTop: 5,
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
            <span>{`0${currentCarIndex}`}</span>
            {car.images[currentCarIndex].color}
          </Color>
        </SectionContent>
      </div>

      <CarouselContainer carLength={car.images.length}>
        <Slider {...settings}>
          {car.images.map((item: any) => (
            <CarImageComponent key={item.url} src={item.url} alt={car.name} />
          ))}
          {car.images.map((item: any) => (
            <CarImageComponent key={item.url} src={item.url} alt={car.name} />
          ))}
        </Slider>
      </CarouselContainer>
    </Container>
  );
};

export default Details;
