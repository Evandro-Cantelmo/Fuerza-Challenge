import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;

    height: 40px;

    padding: 0.4rem 0.6rem 0.2rem;

    border: 1px solid rgba(157, 164, 166, 0.07);
    border-radius: 4px;

    background: ${theme.colors.white};

    &:not(:first-child) {
      margin-top: 1rem;
    }

    label {
      position: absolute;
      top: 50%;

      transform: translate(0, -50%);
      transition: all 0.2s;

      font-weight: 600;
      color: ${theme.colors.brown.secondary};
    }

    input {
      width: 100%;

      margin-top: auto;

      font-size: 1rem;
      color: ${theme.colors.brown.primary};
      font-weight: 300;

      background: transparent;

      border: none;

      z-index: 1;

      &:focus,
      &:not([value='']) {
        outline: none;

        + label {
          top: 25%;

          color: ${theme.colors.gray};
          font-size: 9px;
          font-weight: 400;
        }
      }
    }
  `}
`;
