import styled from 'styled-components';

export const Container = styled.h1`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 2px 2px 10px ${({ theme }) => theme.medium_white};

  padding: 0 10%;
`;

export const Title = styled.h1`
  font-size: 24px;

  text-transform: uppercase;

  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
