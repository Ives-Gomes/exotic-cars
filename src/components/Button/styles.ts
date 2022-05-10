/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

interface ButtonStylesProps {
  background: string;
  color: string;
  borderColor: string;
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  width: 150px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => css`
    background: ${props.background};
  `}
  ${(props) => css`
    color: ${props.color};
  `}
  ${(props) => css`
    border: 1px solid ${props.borderColor};
  `}

  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
`;
