import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { Card, CarAnimationComponent } from '@components/index';

import { CarsMethods } from '@shared/services';

import { Car } from '@interfaces/cars/carsInterfaces';

import {
  Container, Content, Fab, LoadingContainer, WarningMessage,
} from './styles';

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { getCars } = CarsMethods();

    getCars()
      .then(({ data }) => setCars(data))
      .catch(() => setError(true));
  }, []);

  const handleAnchor = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {cars.length === 0 ? (
        <LoadingContainer>
          <CarAnimationComponent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />

          {error ? (
            <WarningMessage>
              Algo deu errado... Tente novamente mais tarde!
            </WarningMessage>
          ) : (
            <WarningMessage>Carregando...</WarningMessage>
          )}
        </LoadingContainer>
      ) : (
        <>
          <Content>
            {cars.map((car) => (
              <Card
                key={car.id}
                car={car}
              />
            ))}
          </Content>

          <Fab onClick={() => handleAnchor()}>
            <IoIosArrowUp />
          </Fab>
        </>
      )}

    </Container>
  );
};

export default Home;
