import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 1078px;
    margin: auto;
    padding: 0 0px 6px;
    font-family: ${theme.fonts.family.secondary};
    font-size: 24px;
    font-weight: 700;

    

    gap: 0.8rem;

    button {
      max-width: 160px;

      margin-left: auto;

      margin-top: -10px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
  `}
`;
