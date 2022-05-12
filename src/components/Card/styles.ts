import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 300px;

  background: ${({ theme }) => theme.light_grey};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.medium_white};

  border-radius: 20px;

  cursor: pointer;

  margin: 0 20px 20px 0;

  &:hover {
    background: rgb(96,91,189);
    background: linear-gradient(48deg, rgba(96,91,189,0.5690651260504201) 0%, rgba(128,125,224,0.30015756302521013) 100%, rgba(255,255,255,1) 100%);

    svg {
      color: ${({ theme }) => theme.medium_black};
    }
  }

  @media (max-width: 425px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 20px 0 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.medium_black};
  font-weight: 600;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.medium_black};
  font-weight: 400;
  font-size: 14px;

  text-transform: uppercase;
`;

export const DotsContent = styled.div`
  position: relative;

  svg {
    width: 30px;
    height: 30px;

    color: ${({ theme }) => theme.dark_grey};

    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.medium_black};
  font-weight: 600;
  font-size: 22px;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 600;

  color: ${({ theme }) => theme.white};
`;
