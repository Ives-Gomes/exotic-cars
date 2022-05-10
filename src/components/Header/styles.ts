import styled from 'styled-components';

interface ButtonProps {
  hasBorder: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;

  box-shadow: 2px 2px 10px ${({ theme }) => theme.medium_white};

  padding: 0 10%;

  @media (max-width: 1024px) {
    padding: 0 4%;
  }
`;

export const HeaderContainer = styled.div`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 24px;

  text-transform: uppercase;

  span {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ButtonsContainer = styled.div`
  @media(max-width: 425px) {
    width: 150px;
    display: flex;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 30px;

  font-size: 14px;
  font-weight: 600;

  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.blue};

  border: 2px solid ${({ hasBorder, theme }) => (hasBorder ? theme.blue : theme.white)};
  border-radius: 12px;
`;
