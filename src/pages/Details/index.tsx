/* eslint-disable operator-linebreak */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Carousel from 'react-elastic-carousel';

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

interface CurrentCatProps {
  item: {
    src: string;
    alt: string;
  }
}

const Details = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [currentCar, setCurrentCar] = useState<CurrentCatProps>({} as CurrentCatProps);

  const { car }: any = state;

  const showAlert = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

  const changeCurrentCar = (currentItem: any) => {
    setCurrentCar(currentItem);
    console.log(currentItem);
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
            src={currentCar.item ? currentCar.item.src : car.image2.url}
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
        <Carousel
          itemsToShow={3}
          initialActiveIndex={2}
          renderPagination={() => <div />}
          onNextEnd={(currentItem) => changeCurrentCar(currentItem)}
          onPrevEnd={(currentItem) => changeCurrentCar(currentItem)}
        >
          <div />
          <img src={car.image1.url} alt={car.image1.color} style={{ width: 100, height: 100 }} />
          <img src={car.image2.url} alt={car.image2.color} style={{ width: 100, height: 100 }} />
          <img src={car.image3.url} alt={car.image3.color} style={{ width: 100, height: 100 }} />
          <img src={car.image4.url} alt={car.image4.color} style={{ width: 100, height: 100 }} />
          <img src={car.image5.url} alt={car.image5.color} style={{ width: 100, height: 100 }} />
          <div />
        </Carousel>
      </div>
    </Container>
  );
};

export default Details;
