import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { Card } from '@components/index';

import { CarsMethods } from '@shared/services';

import { Car } from '@interfaces/cars/carsInterfaces';

import { Container, Content, Fab } from './styles';

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const { getCars } = CarsMethods();

    getCars().then(({ data }) => setCars(data));
  }, []);

  const handleAnchor = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Content>
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </Content>

      <Fab onClick={() => handleAnchor()}>
        <IoIosArrowUp />
      </Fab>
    </Container>
  );
};

export default Home;
