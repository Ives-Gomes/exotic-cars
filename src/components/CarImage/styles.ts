import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 20px;

  transition: margin-top .2s;

  margin-top: 20px;

  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const Background = styled.div`
  min-width: 250px;
  min-height: 180px;

  position: absolute;
  z-index: -1;

  border-radius: 10px;

  background: rgb(212,212,212);
  background: linear-gradient(228deg, rgba(212,212,212,1) 0%, rgba(195,195,195,1) 100%);

  @media (max-width: 375px) {
    min-width: 230px;
    min-height: 120px;
  }

  @media (max-width: 320px) {
    min-width: 200px;
    min-height: 100px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
