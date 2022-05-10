import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Filter } from '@components/index';

import {
  Button,
  ButtonsContainer,
  Container,
  HeaderContainer,
  Title,
} from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderContainer onClick={() => navigate('/')}>
        <Title>
          Exotic
          {' '}
          <span>Cars</span>
        </Title>
      </HeaderContainer>

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
};

export default Header;
