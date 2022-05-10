import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box;

  padding: 50px;
`;

export const HeaderContent = styled.div`
  display: flex;

  position: absolute;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;

  margin-right: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;

  color: ${({ theme }) => theme.medium_black};

  margin-bottom: 10px;
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: 400;

  color: ${({ theme }) => theme.medium_black};
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.img`
  width: 50vw;
  height: 60vh;
`;

export const Color = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  font-weight: 400;

  color: ${({ theme }) => theme.medium_black};

  margin-bottom: 15%;

  span {
    font-size: 42px;
    font-family: sans-serif;
    font-weight: 600;
  }
`;
