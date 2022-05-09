import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 50px;
`;

export const Fab = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20px;
  right: 20px;

  background: rgb(134,46,46);
  background: linear-gradient(48deg, rgba(134,46,46,0.4542191876750701) 0%, rgba(131,48,48,0.40379901960784315) 100%);

  border-radius: 100px;

  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;

    color: ${({ theme }) => theme.white}
  }
`;
