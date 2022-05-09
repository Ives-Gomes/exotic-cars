import React from 'react';

import { Filter } from '@components/index';

import {
  Button, ButtonsContainer, Container, Title,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <Title>
        Exotic
        {' '}
        <span>Cars</span>
      </Title>
    </div>

    <div>
      <Filter />
    </div>

    <ButtonsContainer>
      <Button
        type="button"
        hasBorder={false}
      >
        Registrar
      </Button>
      <Button
        type="button"
        hasBorder
      >
        Entrar
      </Button>
    </ButtonsContainer>
  </Container>
);

export default Header;
