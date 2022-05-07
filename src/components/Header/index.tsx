import React from 'react';

import { Filter } from '@components/index';

import { Container, Title } from './styles';

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

    <div>
      <button type="button">Registrar</button>
      <button type="button">Entrar</button>
    </div>
  </Container>
);

export default Header;
