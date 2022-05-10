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

export const CarImage = styled.img`
  width: 50vw;
  height: 60vh;
`;
