import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 100px;

  background: ${({ theme }) => theme.medium_black};
  color: ${({ theme }) => theme.white};

  &:hover {
    background: ${({ theme }) => theme.medium_black};
    color: ${({ theme }) => theme.white};
  }

  &:before {
    content: '';
}
`;
