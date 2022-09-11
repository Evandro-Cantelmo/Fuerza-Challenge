import styled, { css } from 'styled-components';

export const CustomButton = styled.button<{
  onOutline?: boolean;
}>`
  ${({ theme, onOutline }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 160px;
    min-height: 3rem;
    border: none;

    padding: 0.4rem 0.7rem;

    border-radius: 2rem;

    background-color: ${theme.colors.brown.primary};
    font-weight: 600;
    color: ${theme.colors.white};

    gap: 5px;

    &:hover {
      filter: brightness(90%);
    }

    ${onOutline &&
    css`
      width: max-content;

      border: 2px solid ${theme.colors.brown.primary};

      color: ${theme.colors.brown.primary};
      background-color: ${theme.colors.background};
    `}
  `}
`;
