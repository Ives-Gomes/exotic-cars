import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.gray};
  border-radius: 100px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.dark_gray};
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  margin-left: 10px;
`;

export const Texts = styled.p`
  font-size: 12px;

  color: ${({ theme }) => theme.light_black};

  margin-left: 10px;
`;

export const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  .second-calendar {
    margin-left: 20px;
  }
`;

export const Search = styled.div`
  width: 30px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.white};

  border-radius: 100px;
  cursor: pointer;

  margin-right: 2px;

  svg {
    color: ${({ theme }) => theme.blue};
  }
`;
